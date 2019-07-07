/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/*
 * SignIn
 *
 * This is the first thing users see of our App, at the '/sign-in' route
 */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styles from './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  ToastContainer,
  toast
} from 'react-toastify';

// Components 
import location from '../../../images/pin.png';
import ReactLoading from 'react-loading';
import Footer from '../../Layout/Footer';

// Utility
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import classnames from 'classnames';
import validate from '../../../utils/Validations/userValidate';


// State
import {
  makeSelectUserEmail,
  makeSelectUserPassword,
  makeSelectLoading,
  makeSelectError,
  makeSelectresponseStatus,
} from '../../App/selectors';

import reducer from '../../App/reducer';
import saga from './saga';
import {
  signIn,
  changeEmail,
  changePassword,
} from '../../App/actions';


export function SignIn({
putSignIn,
email,
password,
setPassword,
setEmail,
loading,
error,
responseStatus,
}) {

    useInjectReducer({ key: 'global', reducer });
    useInjectSaga({ key: 'global', saga });

    useEffect(() => {
    }, []);

      const notify = () => {
        const toastId = 19;
         toast.update(toastId, {
           render: "New content",
           type: toast.TYPE.INFO,
           autoClose: 5000
         });
        toast("Wow so easy !", {
          toastId:19,
        });
      };

  return (
    <article>
      <Helmet>
        <title>SignIn Page</title>
        <meta name="description" content="this is SignIn page" />
      </Helmet>
      <div className={classnames(`signIn`)}>
      <ToastContainer position='bottom-left' />
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.loginInput}
                  placeholder="email"
                
              />
              <input
                type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.loginInput}
                  placeholder="Password"
              />
            </div>
            <button
            type="button"
                // onClick={() => putSignIn(validate, email, password)}
                onClick={notify}
                className={styles.loginBtn} 
                variant="primary"
            >
              login
            </button>
            <a href='/forget-password' className={styles.forgotText}>Forgot password?</a>
            <div className={styles.accountBox}>
              <p className={styles.accountText}>Dont have an account?</p>
              <a href='/sign-up' className={styles.forgotText}>Create Account</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </article>
  );
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectUserEmail(),
  password: makeSelectUserPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  responseStatus: makeSelectresponseStatus(),
});


function mapDispatchToProps(dispatch) {
  return {
    setEmail: val => dispatch(changeEmail(val)),
    setPassword: val => dispatch(changePassword(val)),
    putSignIn: (validate, email, password) => {
      const v = validate(email, password);
      if (v) {
        dispatch(signIn())
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
)(SignIn);
