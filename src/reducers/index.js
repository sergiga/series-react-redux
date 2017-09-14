import merge from 'lodash/merge'
import { combineReducers } from 'redux';

const entities = (state = { series: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

const reducer = combineReducers({
  entities
});

export default reducer;