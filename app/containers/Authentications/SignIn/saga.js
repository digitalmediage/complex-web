/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

import { signedIn, signInError } from '../../App/actions';
import { SIGN_IN_REQUEST } from '../../App/constants';

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
export function* __SignIn() {
  console.log('saga - sign-in worker run');

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
      `${SERVER_ADDRESS}/${API_VERSION}/auth/login`,
      {
        email: userEmail,
        password: userPassword,
      },
    );
    console.log('user logIn yield');
    console.log(userRegistered);
    if (userRegistered.data) {
      if (userRegistered.data.code === 500) {
        yield put(signInError(userRegistered.data.message));
        return;
      }

      if (userRegistered.data.code === 401) {
        toast(
          userRegistered.data.message
            ? userRegistered.data.message
            : 'Internal Server Error',
          {
            toastId: 'sign-in',
          },
        );
        yield put(signInError(userRegistered.data.message));
        return;
      }

      if (userRegistered.status == 409) {
        toast(
          userRegistered.data.message
            ? userRegistered.data.message
            : 'Internal Server Error',
          {
            toastId: 'sign-in',
          },
        );
        yield put(
          signInError(
            userRegistered.data.message
              ? userRegistered.data.message
              : 'Internal Server Error',
          ),
        );
        return;
      }
    }
    if (!userRegistered.user || !userRegistered.token_) {
      if (userRegistered.data) {
        yield put(signInError(userRegistered.data));
        return;
      }
    }
    // we get successfully response

    localStorage.setItem('token', userRegistered.token.accessToken);
    localStorage.setItem('verified', userRegistered.user.isVerified);
    localStorage.setItem('user', JSON.stringify(userRegistered.user));
    
    console.log(userRegistered.user.isVerified);
    console.log('After action signedIn');
    yield put(signedIn(userRegistered));
    
    yield put(push('/'));
  } catch (error) {
    console.log(error.response ? error.response : error);
    console.log('error happen in sign-up  saga worker');
  }
}

// Complex Watcher - SAGA-ROOT
export default function* signUpSaga() {
  console.log('saga - sign-up watcher run');
  yield takeLatest(SIGN_IN_REQUEST, __SignIn);
}
