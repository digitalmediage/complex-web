/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import {
  receiveProperties,
  propertiesError,
  receiveComplexes,
  complexesError,
  receiveNotifications,
  notificationsError,
} from '../App/actions';
// import { makeSelectUser } from '../App/selectors';

import {
  PROPERTY_REQUEST,
  COMPLEX_REQUEST,
  NOTIFICATION_REQUEST,
} from '../App/constants';
import { SERVER_ADDRESS, API_VERSION } from '../../variable';
import checkError from '../../utils/checkError';
import request from '../../utils/request';

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
    // const user = yield makeSelectUser();
    // console.log('token on state');
    // console.log(user);
    // let token = null;
    // if (user.token) {
    //   token = user.token;
    // }

    let __Notifications = null;
    const notificationRequest = request(__Notifications);
    const notifications = yield notificationRequest
      .get('notification')
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });

    console.log('notification yield');
    console.log(notifications);
    const responseStatus = checkError(notifications);
    if (responseStatus) {
      if (responseStatus == 403 || responseStatus == 401) {
        yield put(push('/sign-up'));
        yield put(notificationsError('Please Sign Up'));
        return;
      }
    }

    if (notifications && notifications.data) {
      console.log('__Notifications succsesfully action');
      yield put(receiveNotifications(notifications.data));
    }

    if (notifications && !notifications.data) {
      yield put(notificationsError('Internal Server Error'));
    }
  } catch (err) {
    console.log(err);
    yield put(notificationsError(err));
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
