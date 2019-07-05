/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import request from '../../utils/request';
import {
  receiveProperties,
  propertiesError,
  receiveComplexes,
  complexesError,
} from '../App/actions';
import { makeSelectUser } from '../App/selectors';
import {
  PROPERTY_REQUEST,
  COMPLEX_REQUEST,
  NOTIFICATION_REQUEST,
} from '../App/constants';
import { SERVER_ADDRESS, API_VERSION } from '../../variable';
import checkError from '../../utils/checkError';
import { push } from 'connected-react-router'

function publickRequest(url) {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(err => {
      console.log('error happen in request(AXIOS)');
      console.log(err);
    });
}

// Property Worker
export function* __propertyWorker() {
  console.log('saga - properties worker run');

  try {
    const properties = yield publickRequest(
      `${SERVER_ADDRESS}/${API_VERSION}/property`,
    );
    console.log('properties yield');
    console.log(properties);
    yield put(receiveProperties(properties.data));
  } catch (err) {
    console.log(err);
    yield put(propertiesError(err));
    console.log('erroor happen in saga worker');
  }
}

// Complex worker
export function* __complexWorker() {
  console.log('saga - complex worker run');

  try {
    const complexes = yield publickRequest(
      `${SERVER_ADDRESS}/${API_VERSION}/complex`,
    );
    console.log('complexes yield');
    console.log(complexes);
    yield put(receiveComplexes(complexes.data));
  } catch (err) {
    console.log(err);
    yield put(complexesError(err));
    console.log('erroor happen in saga worker');
  }
}

export function* __notificationWorker() {
  console.log('saga - notification worker run');
  try {
    const user = yield makeSelectUser();
    let __Notifications = null;
    console.log('token on state');
    console.log(user);
    let token = null;
    if (user.token) {
      token = user.token;
    }

    const notificationRequest = request(null);
    const notifications = yield notificationRequest
      .get('notification')
      .then(response => {
          console.log('response Succsess JJJJJJ');
        __Notifications = response;
      })
      .catch(error => {
        __Notifications = error;
      });

    console.log('notification yield');
    console.log(__Notifications.response);
    const responseStatus = checkError(__Notifications);
    if (responseStatus) {
         if (responseStatus == 403) {
             yield put(push('/sign-up'));
             yield put(complexesError('Please Sign In First'));
         }
         return;
    }

    if (__Notifications && __Notifications.data) {
      yield put(receiveComplexes(__Notifications.data));
    }

    if (__Notifications && !__Notifications.data) {
      yield put(complexesError(__Notifications.response));
    }
  } catch (err) {
    console.log(err);
    yield put(complexesError(err));
    console.log('erroor happen in saga worker');
  }
}

// Complex Watcher - SAGA-ROOT
export default function* propertySaga() {
  console.log('saga - properties watcher run');
  yield takeLatest(PROPERTY_REQUEST, __propertyWorker);
  yield takeLatest(COMPLEX_REQUEST, __complexWorker);
  yield takeLatest(NOTIFICATION_REQUEST, __notificationWorker);
}