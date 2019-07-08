/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const userVerified = () => {
  const token = localStorage.getItem('token');
  const verify = localStorage.getItem('verified');
  if (token && verify) {
    return true;
  }

  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userVerified() ? <Component {...props} /> : <Redirect to="sign-in" />
    }
  />
);

export default PrivateRoute;
