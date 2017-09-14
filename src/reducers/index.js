import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  entities: {},
  queriedSeries: {}
}

const genre = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
  case ActionTypes.SEARCH_SUCCESS:
    return {
      ...state,
      [action.id]: {
        ...action.plan
      }
    };
  default:
    return state;
  }
}

const series = (state = {}, action) => {
  switch (action.type) {
  case ActionTypes.SEARCH_SUCCESS:
    return {
      ...state,
      [action.id]: {
        ...action.plan
      }
    };
  default:
    return state;
  }
}

const entities = combineReducers({
  genre,
  series
});

const reducer = combineReducers({
  entities
});

export default reducer;