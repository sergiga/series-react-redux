import { API_MIDDLEWARE, Schemas } from '../middleware/api';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const searchSerie = serie => ({
  [API_MIDDLEWARE]: {
    types: [ SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE ],
    endpoint: 'search/shows',
    query: { q: serie },
    schema: Schemas.SERIE_ARRAY
  }
});