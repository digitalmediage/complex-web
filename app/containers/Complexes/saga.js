/* eslint-disable no-underscore-dangle */
import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { makeSelectComplexes } from './selector';
import { complexResult } from './actions';
import { REQUEST_COMPLEX } from './constanst';

function request(url) {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(err => {
      console.log('error happen in request(AXIOS)');
      console.log(err);
    });
}

// Complex Worker
export function* __ComplexResult() {
  console.log('saga - complex worker run');
  // Select username from store
  //   const complex = yield select(makeSelectComplexes());
  //   const requestURL = `http://localhost:8080/v1/complex`;

  try {
    // Call our request helper (see 'utils/request')
    // const complexs = yield call(request('http://localhost:8080/v1/complex'));
    const complexs = yield request('http://5.253.27.170:3000/v1/complex');
    console.log('complexes yield');
    console.log(complexs);
    yield put(complexResult(complexs.data));
  } catch (err) {
    console.log(err);
    console.log('erroor happen in saga worker');
  }
}

// Complex Watcher - SAGA-ROOT
export default function* tesSaga() {
  console.log('saga - complex watcher run');
  // See example in containers/HomePage/saga.js
  yield takeLatest(REQUEST_COMPLEX, __ComplexResult);
}
