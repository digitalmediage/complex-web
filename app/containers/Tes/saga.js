import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Get_COMPLEX } from './constants';
import {makeSelectComplex} from './selectors';
import axios from 'axios';

import {complexAcc} from './actions';
// Individual exports for testing

function request(url) {
 return axios.get(url);
}


//getComplex
export function* getComplex() {
  console.log('saga worker run');
  // Select username from store
  const complex = yield select(makeSelectComplex());
  const requestURL = `http://localhost:8080/v1/complex`;

  try {
    // Call our request helper (see 'utils/request')
    // const complexs = yield call(request('http://localhost:8080/v1/complex'));
    const complexs = yield [{a:1}]
    yield put(complexAcc(complexs));
  } catch (err) {
    console.log(err);
    console.log('erroor happen in saga worker');
  }
}

export default function* tesSaga() {
  console.log('saga watcher run');
  // See example in containers/HomePage/saga.js
  yield takeLatest(Get_COMPLEX, getComplex);
}
