export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ADD_TODO = 'ADD_TODO';
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}