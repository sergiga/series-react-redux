import * as ActionTypes from '../actions';
import merge from 'lodash/merge';
import { combineReducers } from 'redux';

const mergeEntities = (state, action, entity) => {
  if (action.response && action.response.entities && action.response.entities[entity]) {
    return merge({}, state, action.response.entities[entity]);
  }
  return state;
}

const actors = (state = {}, action) => {
  return mergeEntities(state, action, 'actors');
}

const series = (state = {}, action) => {
  switch(action.type) {
    case ActionTypes.SERIE_CAST_SUCCESS:
      return state;
    default:
      return mergeEntities(state, action, 'series');
  }
}

const reducer = combineReducers({
  entities: combineReducers({
    actors,
    series
  })
});

export default reducer;