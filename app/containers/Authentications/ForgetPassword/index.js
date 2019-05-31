/* eslint-disable import/named */
/*
 * Forget Password
 *
 * This is the first thing users see of our App, at the '/forget-password' route
 */

import React from 'react';

import { Helmet } from 'react-helmet';

import globalStyle from '../../../assets/global-styles/bootstrap.min.css';
// import styles from './styles.css';

export default function ForgetPassword() {
  return (
    <article>
      <Helmet>
        <title>Forget Password Page</title>
        <meta name="description" content="this is Forget Password page" />
      </Helmet>
      <div className={globalStyle.container}>Forget Password page</div>
    </article>
  );
}
