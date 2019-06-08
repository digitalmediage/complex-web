/* eslint-disable import/named */
/*
 * Forget Password
 *
 * This is the first thing users see of our App, at the '/forget-password' route
 */

import React from 'react';

import { Helmet } from 'react-helmet';

// eslint-disable-next-line import/no-unresolved
import globalStyle from 'bs';

export default function ForgetPassword() {
  return (
    <article>
      <Helmet>
        <title>Forget Password Page</title>
        <meta name="description" content="this is Forget Password page" />
      </Helmet>
      <div className={globalStyle['pt-5']}>Forget Password page</div>
    </article>
  );
}
