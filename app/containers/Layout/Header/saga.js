/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
// import axios from 'axios';

import { signOuted } from '../../App/actions';
import { SIGN_OUT_REQUEST } from '../../App/constants';

// import {
//   makeSelectUserEmail,
//   makeSelectUserPassword,
// } from '../../App/selectors';
// import { complexResult } from './actions';
// import { REQUEST_COMPLEX } from './constanst';
// import { API_VERSION, SERVER_ADDRESS } from '../../../variable';

// function request(url, user) {
//   return axios
//     .post(url, user)
//     .then(response => response.data)
//     .catch(error => {
//       console.log('error happen in request(AXIOS)');
//       console.log(error);
//       console.log(error.response);
//       return error.response;
//     });
// }

// Complex Worker
export function* __SignOut() {
  console.log('saga - sign-in worker run');

  try {

    // we get successfully response

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    yield put(signOuted());
    yield put(push('/sign-in'));
  } catch (error) {
    console.log(error.response ? error.response : error);
    console.log('error happen in sign-up  saga worker');
  }
}

// Complex Watcher - SAGA-ROOT
export default function* signUpSaga() {
  console.log('saga - sign-up watcher run');
  yield takeLatest(SIGN_OUT_REQUEST, __SignOut);
}
