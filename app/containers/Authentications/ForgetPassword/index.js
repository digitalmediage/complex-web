/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/*
 * SignIn
 *
 * This is the first thing users see of our App, at the '/sign-in' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import styles from '../SignIn/styles.css';
import location from '../../../images/pin.png';
import Footer from '../../Layout/Footer';

export default function SignIn() {
  return (
    <article>
      <Helmet>
        <title>Forget Password Page</title>
        <meta name="description" content="this is SignIn page" />
      </Helmet>
      <div className={classnames(`signIn`)}>
        <h3 className={styles.loginTitle}><span className={styles.loginTitleBlue}>Forget Password</span> Geo.Properties</h3>
        <div className={styles.login}>
          <div className={styles.loginImg}>
            <img
              className={styles.locationImg}
              src={location}
              alt="complex"
            />
          </div>
          <form className={styles.loginForm}>
            <div className={classnames(`form-group formLogin`)}>
              {/* <label className={styles.labelInput}>Email</label> */}
              <input
                type="password"
                className={styles.loginInput}
                placeholder="Password"
              />
              <input
                type="password"
                className={styles.loginInput}
                placeholder="New Password"
              />
            </div>
            <button className={styles.loginBtn} variant="primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </article>
  );
}
