/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  receiveProperties,
  propertiesError,
  receiveComplexes,
  complexesError,
} from '../App/actions';
import { PROPERTY_REQUEST, COMPLEX_REQUEST } from '../App/constants';
import { SERVER_ADDRESS, API_VERSION } from '../../variable';

function request(url) {
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
    const properties = yield request(
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
    const complexes = yield request(`${SERVER_ADDRESS}/${API_VERSION}/complex`);
    console.log('complexes yield');
    console.log(complexes);
    yield put(receiveComplexes(complexes.data));
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
}
