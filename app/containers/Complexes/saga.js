/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { complexResult } from './actions';
import { REQUEST_COMPLEX } from './constanst';
import { API_VERSION, SERVER_ADDRESS } from '../../variable';

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
    const complexs = yield request(`${SERVER_ADDRESS}/${API_VERSION}/complex`);
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
  yield takeLatest(REQUEST_COMPLEX, __ComplexResult);
}
