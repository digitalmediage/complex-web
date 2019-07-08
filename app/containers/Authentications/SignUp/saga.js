/* eslint-disable no-else-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import axios from 'axios';

import { registered, signUpError } from '../../App/actions';
import { SIGN_UP_REQUEST } from '../../App/constants';
import checkError from '../../../utils/checkError';

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

    const responseStatus = checkError(userRegistered);
    if (responseStatus) {
      if (responseStatus.status && responseStatus.message) {
        yield put(signUpError(responseStatus.message));
        toast(responseStatus.message, {
          toastId: 'sign-up',
        });
        return;
      } else if (responseStatus === true) {
        yield put(signUpError(responseStatus.message));
        toast('Internal Server Error', {
          toastId: 'sign-up',
        });
        return;
      }
    }

    if (!userRegistered.user || !userRegistered.token_) {
      if (userRegistered.data) {
        yield put(signUpError(userRegistered.data));
        toast('Internal Server Error', {
          toastId: 'sign-up',
        });
        return;
      }
    }
    // we get successfully response

    localStorage.setItem('token', userRegistered.token_.accessToken);
    localStorage.setItem('user', JSON.stringify(userRegistered.user));
    toast('Your Account created Successfully ');
    toast('Please Check Your Email Address');
    yield put(registered(userRegistered));
    // yield put(push('/'));
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
