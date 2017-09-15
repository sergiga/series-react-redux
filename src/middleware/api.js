import { normalize, schema } from 'normalizr';
import omit from 'lodash/omit';
import axios from 'axios';

// API call
const API_ROOT = 'http://api.tvmaze.com/';
const callApi = (endpoint, query, schema) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return axios.get(fullUrl, { params: query }, {
    validateStatus: function (status) {
      return status >= 200 && status < 500;
    }
  }).then(({ data }) => {
    return Object.assign({}, normalize(data, schema));
  });
}

// Schemas
const serie = new schema.Entity('series', {}, {
  idAttribute: (entity) => entity.show ? entity.show.id : entity.id,
  processStrategy: (entity) => {
    return omit(entity.show ? entity.show : entity, [
      'type', 'language', 'runtime', 
      'premiered', 'weight', 'network', 
      'webChannel', 'externals', '_links'
    ]);
  }
});

const actor = new schema.Entity('actors', {}, {
  idAttribute: (entity) => entity.person.id,
  processStrategy: (entity) => entity.person
});

export const Schemas = {
  SERIE: serie,
  SERIE_ARRAY: [ serie ],
  ACTOR: actor,
  ACTOR_ARRAY: [ actor ]
}

// Redux middleware
export const API_MIDDLEWARE = 'API_MIDDLEWARE';

export default store => next => action => {
  const apiCall = action[API_MIDDLEWARE];

  if(!apiCall) {
    next(action);
  }

  const { endpoint, query, types, schema } = apiCall;

  if(typeof endpoint !== 'string') {
    throw new Error('Expecting the endpoint to be a string');
  }
  if(!Array.isArray(types)) {
    throw new Error('Expecting an array of types.');
  }
  if(types.length !== 3) {
    throw new Error('Expecting three action types.')
  }
  if(!types.every(type => typeof type === 'string')) {
    throw new Error('Expecting three action types to be strings.');
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[API_MIDDLEWARE];
    return finalAction;
  }

  const [ requestType, successType, failureType] = types;

  next(actionWith({ type: requestType }));

  return callApi(endpoint, query, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  );
}