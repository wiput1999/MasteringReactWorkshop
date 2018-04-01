import axios from 'axios';

import keys from '../../common/config';

const SEARCH_RUN = 'SEARCH_RUN';
const SEARCH_TYPE = 'SEARCH_TYPE';

const initialState = {
  text: '',
  result: [],
  isLoading: false,
  isError: false
};

// Action reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case `${SEARCH_RUN}_PENDING`:
      return { ...state, text: '', isLoading: true, isError: false };
    case `${SEARCH_RUN}_FULFILLED`:
      console.log(action.payload);
      return { ...state, result: action.payload.data.results, isLoading: true, isError: false };
    case `${SEARCH_RUN}_REJECTED`:
      return { ...state, text: '', isLoading: true, isError: true };
    case SEARCH_TYPE:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

// Action Creator
export const searchType = (text) => ({
  type: SEARCH_TYPE,
  text
});

export const searchRun = (text) => ({
  type: SEARCH_RUN,
  payload: axios.get(`https://api.unsplash.com/search/photos/?client_id=${keys.accessKey}&query=${text}`)
});
