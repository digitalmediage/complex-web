import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Get_COMPLEX } from './constants';
import { makeSelectComplex } from './selectors';
import axios from 'axios';

import { complexAcc, complexFetchError } from './actions';
// Individual exports for testing

function request(url) {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(err => {
      console.log('error happen in request(AXIOS)');
    });
}

// getComplex

export function* getComplex() {
  console.log('saga worker run');
  // Select username from store
  // const complex = yield select(makeSelectComplex());
  // const requestURL = `http://localhost:8080/v1/complex`;

  try {
    // Call our request helper (see 'utils/request')
    // const complexs = yield call(request('http://localhost:8080/v1/complex'));
    const complexs = yield request('http://localhost:8080/v1/complex');

    console.log('complexes yield');
    console.log(complexs);
    yield put(complexAcc(complexs.data));
  } catch (err) {
    console.log(err);
    yield put(complexFetchError(err));
  }
}

export default function* tesSaga() {
  console.log('saga watcher run');
  // See example in containers/HomePage/saga.js
  yield takeLatest(Get_COMPLEX, getComplex);
}
