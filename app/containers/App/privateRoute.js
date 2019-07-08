/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const userVerified = localStorage.getItem('Forbidden');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      localStorage.getItem('token') && localStorage.getItem('verified') ? (
        <Component {...props} />
      ) : (
        <Redirect to="sign-in" />
      )
    }
  />
);

export default PrivateRoute;
