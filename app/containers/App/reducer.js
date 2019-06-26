/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import {
  COMPLEX_RESPONSE_ERROR,
  COMPLEX_RESPONSE_SUCCESS,
  COMPLEX_REQUEST,
  PROPERTY_REQUEST,
  PROPERTY_RESPONSE_SUCCESS,
  PROPERTY_RESPONSE_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_RESPONSE_SUCCESS,
  SIGN_UP_RESPONSE_ERROR,
} from './constants';

// Initia Store

export const initialState = {
  loading: false,
  error: false,
  complexes: [],
  properties: [],
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case COMPLEX_REQUEST:
        draft.loading = true;
        draft.error = false;
        break;
      case COMPLEX_RESPONSE_SUCCESS:
        draft.complexes = action.complexes;
        draft.loading = false;
        break;

      case COMPLEX_RESPONSE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case PROPERTY_REQUEST:
        draft.loading = true;
        draft.error = false;
        break;
      case PROPERTY_RESPONSE_SUCCESS:
        draft.properties = action.properties;
        draft.loading = false;
        break;

      case PROPERTY_RESPONSE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case SIGN_UP_REQUEST:
        draft.error = false;
        draft.loading = true;
        break;
      case SIGN_UP_RESPONSE_SUCCESS:
        draft.user = action.user;
        draft.loading = false;
        break;
      case SIGN_UP_RESPONSE_ERROR:
        draft.loading = false;
        draft.error = action.error;
    }
  });

export default appReducer;
