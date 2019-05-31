/* eslint-disable import/named */
/*
 * SignIn
 *
 * This is the first thing users see of our App, at the '/sign-in' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.css';

export default function SignIn() {
  return (
    <article>
      <Helmet>
        <title>SignIn Page</title>
        <meta name="description" content="this is SignIn page" />
      </Helmet>
      <div className={styles.container}>SignIn page</div>
    </article>
  );
}
