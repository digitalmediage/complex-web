/* eslint-disable no-underscore-dangle */
import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
// import { makeSelectComplexes } from './selector';
// import { complexResult } from './actions';
// import {REQUEST_COMPLEX} from './constanst';
import {
  receiveProperties,
  propertiesError,
  receiveComplexes,
  complexesError,
} from '../App/actions';
import { PROPERTY_REQUEST, COMPLEX_REQUEST } from '../App/constants';

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
  // Select username from store
  //   const complex = yield select(makeSelectComplexes());
  //   const requestURL = `http://localhost:8080/v1/complex`;

  try {
    // Call our request helper (see 'utils/request')
    // const complexs = yield call(request('http://localhost:8080/v1/complex'));
    const properties = yield request('http://localhost:8080/v1/property');
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
  // Select username from store
  //   const complex = yield select(makeSelectComplexes());
  //   const requestURL = `http://localhost:8080/v1/complex`;

  try {
    // Call our request helper (see 'utils/request')
    // const complexs = yield call(request('http://localhost:8080/v1/complex'));
    const complexes = yield request('http://localhost:8080/v1/complex');
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
  // See example in containers/HomePage/saga.js
    //   yield takeLatest(PROPERTY_REQUEST, __propertyWorker);
  yield takeLatest(COMPLEX_REQUEST, __complexWorker);
}
