/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { registered, signUpError } from '../../App/actions';
import { SIGN_UP_REQUEST } from '../../App/constants';

import {
  makeSelectUserEmail,
  makeSelectUserPassword,
} from '../../App/selectors';
// import { complexResult } from './actions';
// import { REQUEST_COMPLEX } from './constanst';
import { API_VERSION, SERVER_ADDRESS } from '../../../variable';

function request(url, user) {
  return axios
    .post(url, user)
    .then(response => response.data)
    .catch(error => {
      console.log('error happen in request(AXIOS)');
      console.log(error);
      console.log(error.response);
      return error.response;
    });
}

// Complex Worker
export function* __SignUp() {
  console.log('saga - sign-up worker run');
  // Select username from store
  //   const complex = yield select(makeSelectComplexes());
  //   const requestURL = `http://localhost:8080/v1/complex`;
  const userEmail = yield select(makeSelectUserEmail());
  const userPassword = yield select(makeSelectUserPassword());

  const user = {
    email: userEmail,
    password: userPassword,
  };

  console.log('user');
  console.log(user);

  try {
    console.log('get state beforee send');
    console.log(typeof userEmail);
    console.log(userEmail);
    console.log(userPassword);
    const userRegistered = yield request(
      `${SERVER_ADDRESS}/${API_VERSION}/auth/register`,
      {
        email: userEmail,
        password: userPassword,
      },
    );
    console.log('complexes yield');
    console.log(userRegistered);
    if (userRegistered.data) {
      if (userRegistered.data.code === 500) {
        yield put(signUpError(userRegistered.data.message));
        return;
      }
    }
    if (!userRegistered.user || !userRegistered.token_) {
      if (userRegistered.data) {
        yield put(signUpError(userRegistered.data));
        return;
      }
    }
    yield put(registered(userRegistered.data));
  } catch (error) {
    console.log(error.response ? error.response : error);
    console.log('error happen in sign-up  saga worker');
  }
}

// Complex Watcher - SAGA-ROOT
export default function* signUpSaga() {
  console.log('saga - sign-up watcher run');
  yield takeLatest(SIGN_UP_REQUEST, __SignUp);
}
