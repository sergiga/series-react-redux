import { normalize, schema } from 'normalizr';

// Schemas
const genre = new schema.Entity('genres');
const serie = new schema.Entity('series', {
  genre: genre,

}, {
  processStrategy: (entity) => {
    let e = Object.assign({}, entity);
    delete e.type;
    delete e.language;
    delete e.runtime;
    delete e.premiered;
    delete e.weight;
    delete e.network;
    delete e.webChannel;
    delete e.externals;
    delete e._links;
  }
});

// Redux middleware
export const API_MIDDLEWARE = 'API_MIDDLEWARE';

export default store => next => action => {
  const apiCall = action[API_MIDDLEWARE];

  if(!apiCall) {
    next(action);
  }

  const { endpoint, types, schema } = apiCall;

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

  return callApi(endpoint, schema).then(
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