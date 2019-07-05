/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
import axios from 'axios';

import { API_VERSION, SERVER_ADDRESS } from '../variable';

function checkToken(token) {
  let tokenStorage = null;
  if (!token) {
    tokenStorage = localStorage.getItem('token') && null;
  }

  if (tokenStorage) {
    return token;
  } else {
    return '';
  }
}

const request = (token = null) => {
    console.log('request fn run');
  const _token = checkToken(token);
  console.log('token from checkToken');
  console.log(_token);
  console.log('token from checkToken');

  const Request = axios.create({
    baseURL: `${SERVER_ADDRESS}/${API_VERSION}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + _token },
  });
  return Request;
};

export default request;
