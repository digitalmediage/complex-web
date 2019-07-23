/* eslint-disable no-else-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import axios from 'axios';

import {
  registered,
  signUpError,
  receiveUser,
  getUserError,
} from '../../App/actions';
import { SIGN_UP_REQUEST, USER_PROFILE_REQUEST } from '../../App/constants';
import checkError from '../../../utils/checkError';

import {
  makeSelectUserEmail,
  makeSelectUserPassword,
} from '../../App/selectors';
// import { complexResult } from './actions';
// import { REQUEST_COMPLEX } from './constanst';
import { API_VERSION, SERVER_ADDRESS } from '../../../variable';
import privateRequest from '../../../utils/request';

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

export function* __getUser() {
  console.log('saga - sign-up(get user profile) worker run');

  try {
    const _token = localStorage.getItem('token') && null;
    const getUserRequest = privateRequest(_token);
    console.log('get user request');
    console.log(getUserRequest);
    const userProfile = yield getUserRequest
      .get('users/profile')
      .then(response => response)
      .catch(error => {
        console.log('erorrororo in promise');
        console.log(error);
        return error;
      });

    console.log(userProfile);
    console.log('user get from vvvvvv');

    const responseStatus = checkError(userProfile);
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
    } else if (userProfile.data) {
      console.log('______-----____');
      console.log(userProfile.data);
      if (userProfile.data.isVerified) {
        localStorage.setItem('verified', true);
        window.location.replace('http://localhost:3000');
      }
    }

    // if (!userRegistered.user || !userRegistered.token_) {
    //   if (userRegistered.data) {
    //     yield put(signUpError(userRegistered.data));
    //     toast('Internal Server Error', {
    //       toastId: 'sign-up',
    //     });
    //     return;
    //   }
    // }
  } catch (error) {
    console.log(error);
    console.log('error Happen in getUser GeneratorSaga');
  }
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
  yield takeLatest(USER_PROFILE_REQUEST, __getUser);
}
