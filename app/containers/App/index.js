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
import PrivateRoute from './privateRoute';
import { toast } from 'react-toastify';

import SignIn from '../Authentications/SignIn';
import SignUp from '../Authentications/SignUp/Loadable';
import ForgetPassword from '../Authentications/ForgetPassword';
import Home from '../Home/Loadable';
import Complexes from '../Complexes/Loadable';
import Properties from '../Properties';
import Complex from '../Complex';
import News from '../News/Loadable';
import Manager from '../Manager/Loadable';
import TokenConfirmation from '../TokenConfirmation';
import EmailVerfication from '../Authentications/SignUp/emailValidation';
import SpecificNews from '../News/Editor/Loadable';
import Authorization from '../Authentications/Authorization';
// import GlobalStyle from '../../global-styles';

toast.configure({
  autoClose: 8000,
  draggable: true,
});

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
        {/* <Route exact path="/" component={Home} /> */}
        <PrivateRoute
          exact
          path="/"
          component={Authorization(Home, ['user', 'admin'])}
        />
        {/* <PrivateRoute path="/tes" component={Tes} /> */}
        <PrivateRoute path="/complex/:complexId" component={Complex} />
        <PrivateRoute path="/complex" component={Complexes} />
        <PrivateRoute path="/property" component={Properties} />
        <PrivateRoute path="/manager" component={Manager} />
        <PrivateRoute path="/news/:newsId" component={SpecificNews} />
        <PrivateRoute path="/news" component={News} />
        <Route path="/token-confirmation" component={TokenConfirmation} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/auth/verification" component={EmailVerfication} />
        <Route path="/forget-password" component={ForgetPassword} />
        {/* <Route path="/forget-password" component={ForgetPassword} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
