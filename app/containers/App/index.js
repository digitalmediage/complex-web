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
import Home from '../Home';
import Complexes from '../Complexes/Loadable';
import Properties from '../Properties';
import Complex from '../Complex';
import Tes from '../Tes';
import Manager from '../Manager/Loadable';

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
        <Route exact path="/" component={Home} />
        <Route path="/tes" component={Tes} />
        <Route path="/complex/:complexId" component={Complex} />
        <Route path="/complex" component={Complexes} />
        <Route path="/property" component={Properties} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/forget-password" component={ForgetPassword} />
        <Route path="/forget-password" component={ForgetPassword} />
        <Route path="/manager" component={Manager} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
