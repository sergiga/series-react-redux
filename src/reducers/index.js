import * as ActionTypes from '../actions';
import merge from 'lodash/merge';
import union from 'lodash/union';
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
      if(state[action.serieID]) {
        let nextState = merge({}, state);
        nextState[action.serieID].cast = action.response.result;
        return nextState;
      }
      return state;
    default:
      return mergeEntities(state, action, 'series');
  }
}

const showSearchResults = (state = false, action) => {
  switch(action.type) {
    case ActionTypes.SEARCH_SUCCESS:
      return true;
    case ActionTypes.SHOW_ALL_SERIES:
      return false;
    default:
      return state;
  }
}

const searchResults = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.SEARCH_SUCCESS:
      return action.response.result;
    default:
      return state;
  }
}

const pagination = (state = {
    isFetching: false,
    nextPage: 0,
    series: []
  }, action) => {
    switch (action.type) {
      case ActionTypes.SERIE_PAGE_REQUEST:
        return {
          ...state,
          isFetching: true
        };
      case ActionTypes.SERIE_PAGE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          series: union(state.series, action.response.result),
          nextPage: state.nextPage + 1
        };
      case ActionTypes.SERIE_PAGE_FAILURE:
        return {
          ...state,
          isFetching: false
        };
      default:
        return state;
    }
}

const serieList = combineReducers({
  showSearchResults,
  searchResults,
  pagination
});

const reducer = combineReducers({
  entities: combineReducers({
    actors,
    series
  }),
  serieList
});

export default reducer;