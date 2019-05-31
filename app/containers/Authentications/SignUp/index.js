/* eslint-disable import/named */
/*
 * SignUp
 *
 * This is the first thing users see of our App, at the '/sign-up' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import styles from './styles.css';

export default function SignUp() {
  return (
    <article>
      <Helmet>
        <title>SignUp Page</title>
        <meta name="description" content="this is SignUp page" />
      </Helmet>
      <div>SignUp page</div>
    </article>
  );
}
