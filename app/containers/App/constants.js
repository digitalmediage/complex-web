/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const COMPLEX_REQUEST = 'boilerplate/App/COMPLEX_REQUEST';
export const COMPLEX_RESPONSE_SUCCESS =
  'boilerplate/App/COMPLEX_RESPONSE_SUCCESS';
export const COMPLEX_RESPONSE_ERROR = 'boilerplate/App/COMPLEX_RESPONSE_ERROR';

export const PROPERTY_REQUEST = 'boilerplate/App/PROPERTY_REQUEST';
export const PROPERTY_RESPONSE_SUCCESS =
  'boilerplate/App/PROPERTY_RESPONSE_SUCCESS';
export const PROPERTY_RESPONSE_ERROR =
  'boilerplate/App/PROPERTY_RESPONSE_ERROR';

// Authentication

export const SIGN_UP_REQUEST = 'complex/App/SIGN_UP_REQUEST';
export const SIGN_UP_RESPONSE_SUCCESS = 'complex/App/SIGN_UP_RESPONSE_SUCCESS';
export const SIGN_UP_RESPONSE_ERROR = 'complex/App/SIGN_UP_RESPONSE_ERROR';

export const SIGN_IN_REQUEST = 'complex/App/SIGN_IN_REQUEST';
export const SIGN_IN_RESPONSE_SUCCESS = 'complex/App/SIGN_IN_RESPONSE_SUCCESS';
export const SIGN_IN_RESPONSE_ERROR = 'complex/App/SIGN_IN_RESPONSE_ERROR';
