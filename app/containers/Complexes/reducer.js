/*
 *
 * Complex Reducer
 *
 */

import produce from 'immer';
import {
  REQUEST_COMPLEX,
  COMPLEX_RESULT,
  COMPLEX_FETCH_ERROR,
} from './constanst';

export const initialState = {
  complexes: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const complexReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_COMPLEX:
        draft.loading = true;
        draft.error = false;
        break;
      case COMPLEX_RESULT:
        draft.loading = false;
        draft.complexes = action.complexes;
        break;
      case COMPLEX_FETCH_ERROR:
        draft.error = true;
        break;
      default:
        return draft;
    }
  });

export default complexReducer;
