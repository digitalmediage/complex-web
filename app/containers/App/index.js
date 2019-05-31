/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignIn from '../Authentications/SignIn';
import SignUp from '../Authentications/SignUp';
import ForgetPassword from '../Authentications/ForgetPassword';

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="" />
      </Helmet>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
