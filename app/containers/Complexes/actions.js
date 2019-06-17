/*
 *
 * Complex actions
 *
 */

import {
  REQUEST_COMPLEX,
  COMPLEX_RESULT,
  COMPLEX_FETCH_ERROR,
} from './constanst';

export function requestComplex() {
  return {
    type: REQUEST_COMPLEX,
  };
}

export function complexResult(param) {
  return {
    type: COMPLEX_RESULT,
    complexes: param,
  };
}

export function complexFetchError() {
  return {
    type: COMPLEX_FETCH_ERROR,
  };
}
