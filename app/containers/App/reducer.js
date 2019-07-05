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
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  NEWS_REQUEST,
  NEWS_RECEIVE,
  NEWS_ERROR,
  NOTIFICATION_REQUEST,
  NOTIFICATION_RESPONSE_SUCCESS,
  NOTIFICATION_RESPONSE_ERROR,
} from './constants';

// Initia Store

export const initialState = {
  loading: false,
  error: false,
  complexes: [],
  properties: [],
  notification: [],
  user: {},
  email: '',
  password: '',
  responseStatus: null,
  news: [],
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
      case CHANGE_EMAIL:
        draft.email = action.email;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case SIGN_UP_REQUEST:
        draft.error = null;
        draft.responseStatus = false;
        draft.loading = true;
        // draft.email = action.email;
        // draft.password = action.password;
        break;
      case SIGN_UP_RESPONSE_SUCCESS:
        draft.user = action.user;
        draft.responseStatus = true;
        draft.loading = false;
        break;
      case SIGN_UP_RESPONSE_ERROR:
        draft.loading = false;
        draft.responseStatus = false;
        draft.error = action.error;
        break;
      case NEWS_ERROR:
        draft.error = action.error;
        // draft.responseStatus = false;
        draft.loading = false;
        break;
      case NEWS_RECEIVE:
        draft.loading = false;
        draft.news = action.news;
        // draft.responseStatus = true;
        break;
      case NEWS_REQUEST:
        draft.loading = true;
        // draft.responseStatus = null;
        draft.error = false;
        break;
      case NOTIFICATION_REQUEST:
        draft.error = false;
        draft.loading = true;
        // draft.responseStatus = null;
        break;
      case NOTIFICATION_RESPONSE_SUCCESS:
        draft.loading = false;
        draft.notification = action.notification;
        // draft.responseStatus = true;
        break;
      case NOTIFICATION_RESPONSE_ERROR:
        draft.loading = false;
        draft.error = action.error;
    }
  });

export default appReducer;
