/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  COMPLEX_RESPONSE_ERROR,
  COMPLEX_RESPONSE_SUCCESS,
  COMPLEX_REQUEST,
  PROPERTY_REQUEST,
  PROPERTY_RESPONSE_SUCCESS,
  PROPERTY_RESPONSE_ERROR,
} from './constants';

/**
 * get the complexes, this action starts the request saga
 *
 * @return {object} An action object with a type of COMPLEX_REQUEST
 */
export function getComplexes() {
  return {
    type: COMPLEX_REQUEST,
  };
}

/**
 * response complexes, this action are loaded by the request saga
 *
 * @return {object} An action object with a type of COMPLEX_RESPONSE_SUCCESS
 */
export function receiveComplexes(complexes) {
  return {
    type: COMPLEX_RESPONSE_SUCCESS,
    complexes,
  };
}

/**
 * Dispatched when loading the Response fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of COMPLEX_RESPONSE_ERROR
 */
export function complexesError(error) {
  return {
    type: COMPLEX_RESPONSE_ERROR,
    error,
  };
}

export function getProperties() {
  return {
    type: PROPERTY_REQUEST,
  };
}

export function receiveProperties(properties) {
  return {
    type: PROPERTY_RESPONSE_SUCCESS,
    properties,
  };
}

export function propertiesError(error) {
  return {
    type: PROPERTY_RESPONSE_ERROR,
    error,
  };
}
