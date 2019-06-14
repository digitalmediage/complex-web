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
import styles from './styles.css';
import location from '../../../images/pin.png';
import Footer from '../../Layout/Footer';

export default function SignIn() {
  return (
    <article>
      <Helmet>
        <title>SignIn Page</title>
        <meta name="description" content="this is SignIn page" />
      </Helmet>
      <div className={classnames(`signIn`)}>
        <h3 className={styles.loginTitle}><span className={styles.loginTitleBlue}>Login</span> Geo.Properties</h3>
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
                type="email"
                className={styles.loginInput}
                placeholder="Email"
              />
              <input
                type="password"
                className={styles.loginInput}
                placeholder="Password"
              />
            </div>
            <button className={styles.loginBtn} variant="primary" type="submit">
              login
            </button>
            <a href='/' className={styles.forgotText}>Forgot password?</a>
            <div className={styles.accountBox}>
              <a href='/' className={styles.accountText}>Dont have an account?</a>
              <a href='/' className={styles.forgotText}>Create Account</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </article>
  );
}
