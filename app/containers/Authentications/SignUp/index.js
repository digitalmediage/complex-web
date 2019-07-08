/* eslint-disable no-nested-ternary */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  ToastContainer,
  toast
} from 'react-toastify';

import ReactLoading from 'react-loading';

// Styles
import classnames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  signUp,
  changeEmail,
  changePassword,
  getUser,
} from '../../App/actions';

import {
  makeSelectUserEmail,
  makeSelectUserPassword,
  makeSelectLoading,
  makeSelectError,
  makeSelectresponseStatus,
  makeSelectUser,
} from '../../App/selectors';

import styles from '../SignIn/styles.css';

// Images
import location from '../../../images/pin.png';
import done from '../../../images/done.png';

// Components
import Footer from '../../Layout/Footer';
import Error from '../../../components/Errors';

// Utility
import validate from '../../../utils/Validations/userValidate';

import reducer from '../../App/reducer';
import saga from './saga';

export function SignUp({
  putSignUp,
  email,
  password,
  setPassword,
  setEmail,
  loading,
  error,
  responseStatus,
  user,
  checkUser,
}) {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });

  const EmailVerification = (props) => {
    return ( 
    <div className="loginForm"> 
    <div className="d-flex flex-column">
      <img className="email_verify_img" src={done} alt='done' />
      { props.userName ? <h5> Hi {props.userName} </h5> : null }
      <h6 className="email_vefify_title">Please Check your Email for Verification </h6>
      <button onClick={props.checkForVerify} className="btn btn-success mt-2"> Verified </button>
    </div>
    
    
     </div>
     );
  }

  return (
    <Error>
      <article>
        <Helmet>
          <title>SignUp Page</title>
          <meta name="description" content="this is SignIn page" />
        </Helmet>
        <div className={classnames(`signIn`)}>
          <ToastContainer position="bottom-left" />
          <h3 className={styles.loginTitle}>
            <span className={styles.loginTitleBlue}>SignUp</span> Geo.Properties
          </h3>
          <div className={styles.login}>
            <div className={styles.loginImg}>
              <img
                className={styles.locationImg}
                src={location}
                alt="complex"
              />
            </div>
            {loading === false ? (
              !responseStatus ? (
                <form className={styles.loginForm}>
                  <div className={classnames(`form-group formLogin`)}>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className={styles.loginInput}
                      placeholder="email"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className={styles.loginInput}
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => putSignUp(validate, email, password)}
                    className={styles.loginBtn}
                    variant="primary"
                  >
                    SignUp
                  </button>
                </form>
              ) : (
                <EmailVerification checkForVerify={checkUser} userName={user.user.name || null} />
              )
            ) : (
              <div className={styles.loaderForm}>
                <ReactLoading
                  delay={0}
                  type="cylon"
                  color="blue"
                  height={107}
                  width={175}
                />{' '}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </article>
    </Error>
  );
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectUserEmail(),
  password: makeSelectUserPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  responseStatus: makeSelectresponseStatus(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    setEmail: val => dispatch(changeEmail(val)),
    setPassword: val => dispatch(changePassword(val)),
    checkUser: () => dispatch(getUser()),
    putSignUp: (validate, email, password) => {
      const v = validate(email, password);
      if (v) {
        dispatch(signUp());
      } else {
        return false;
      }
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignUp);
