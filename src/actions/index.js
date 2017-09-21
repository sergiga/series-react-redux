import { API_MIDDLEWARE, Schemas } from '../middleware/api';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const searchSerie = serie => dispatch => {
  return dispatch({
    [API_MIDDLEWARE]: {
      types: [ SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE ],
      endpoint: 'search/shows',
      query: { q: serie },
      schema: Schemas.SERIE_ARRAY
    }
  });
}

export const SERIE_PAGE_REQUEST = 'SERIE_PAGE_REQUEST';
export const SERIE_PAGE_SUCCESS = 'SERIE_PAGE_SUCCESS';
export const SERIE_PAGE_FAILURE = 'SERIE_PAGE_FAILURE';

export const fetchSeriePage = (page = 0) => ({
  [API_MIDDLEWARE]: {
    types: [ SERIE_PAGE_REQUEST, SERIE_PAGE_SUCCESS, SERIE_PAGE_FAILURE ],
    endpoint: 'shows',
    query: { page },
    schema: Schemas.SERIE_ARRAY
  }
});

export const loadSeriePage = (page = 0) => (dispatch, getState) => {
  if(page !== getState().serieList.pagination.nextPage) {
    return null;
  }
  return dispatch(fetchSeriePage(page));
}

export const SERIE_REQUEST = 'SERIE_REQUEST';
export const SERIE_SUCCESS = 'SERIE_SUCCESS';
export const SERIE_FAILURE = 'SERIE_FAILURE';

export const fetchSerie = serieID => ({
  [API_MIDDLEWARE]: {
    types: [ SERIE_REQUEST, SERIE_SUCCESS, SERIE_FAILURE ],
    endpoint: `shows/${serieID}`,
    query: { embed: 'cast' },
    schema: Schemas.SERIE
  }
});

export const SERIE_CAST_REQUEST = 'SERIE_CAST_REQUEST'; 
export const SERIE_CAST_SUCCESS = 'SERIE_CAST_SUCCESS'; 
export const SERIE_CAST_FAILURE = 'SERIE_CAST_FAILURE';

export const fetchSerieCast = (serieID) => ({
  serieID,
  [API_MIDDLEWARE]: {
    types: [ SERIE_CAST_REQUEST, SERIE_CAST_SUCCESS, SERIE_CAST_FAILURE ],
    endpoint: `shows/${serieID}/cast`,
    schema: Schemas.ACTOR_ARRAY
  }
});

export const loadSerie = (serieID, requiredFields = []) => (dispatch, getState) => {
  const serie = getState().entities.series[serieID];

  if (serie && requiredFields.every(key => serie.hasOwnProperty(key))) {
    return null;
  } else if (serie) {
    return dispatch(fetchSerieCast(serieID))
  }

  return dispatch(fetchSerie(serieID));
}

export const SHOW_ALL_SERIES = 'SHOW_ALL_SERIES';

export const showAllSeries = () => (dispatch, getState) => {
  if(!getState().serieList.showSearchResults) { 
    return null;
  }
  return dispatch(() => ({ type: SHOW_ALL_SERIES }));
}