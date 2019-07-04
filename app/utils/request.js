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

const request = (path, token = null) => {
  const _token = checkToken(token);

  return axios.create({
    baseURL: `${SERVER_ADDRESS}/${API_VERSION}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + _token },
  });
};

export default request;
