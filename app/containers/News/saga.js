/* eslint-disable no-underscore-dangle */
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
// import { makeSelectComplexes } from './selector';
// import { complexResult } from './actions';
// import {REQUEST_COMPLEX} from './constanst';
import { newsError, newsReceive } from '../App/actions';
import { NEWS_REQUEST } from '../App/constants';

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
export function* __newsWorker() {
  console.log('saga - news worker run');
  // Select username from store
  //   const complex = yield select(makeSelectComplexes());
  //   const requestURL = `http://localhost:8080/v1/complex`;

  try {
    // Call our request helper (see 'utils/request')
    // const complexs = yield call(request('http://localhost:8080/v1/complex'));
    const news = yield request(`${SERVER_ADDRESS}/${API_VERSION}/news`);
    console.log('news yield');
    console.log(news);
    yield put(newsReceive(news.data));
  } catch (err) {
    console.log(err);
    yield put(newsError(err));
    console.log('erroor happen in saga worker');
  }
}

// Complex Watcher - SAGA-ROOT
export default function* NewsSaga() {
  console.log('saga - News watcher run');
  // See example in containers/HomePage/saga.js
  //   yield takeLatest(PROPERTY_REQUEST, __propertyWorker);
  yield takeLatest(NEWS_REQUEST, __newsWorker);
}
