/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/*
 * Header
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectUser } from '../../App/selectors';
import { signOut } from '../../App/actions';
import reducer from '../../App/reducer';
import saga from './saga';

import styles from './styles.css';

export function Header({ __signOut }) {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'header', saga });

  let user = localStorage.getItem('user');
  user = JSON.parse(user);

  return (
    <div className={styles.header}>
      <div className={styles.leftBox}>
        <div />
        <p>En</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className={classnames('navbar-toggler')}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav centerBox">
            <Link to="/" className="nav-item text-menu nav-link active">
              Home
            </Link>
            <Link className="nav-item text-menu nav-link" to="/complex">
              Complexes
            </Link>
            <Link className="nav-item text-menu nav-link" to="/property">
              Properties
            </Link>
            <Link className="nav-item text-menu nav-link" to="/manager">
              Manager
            </Link>
            <Link className="nav-item text-menu nav-link" to="/news">
              News
            </Link>
            <Link className="nav-item text-menu nav-link" to="/">
              Messages
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.rightBox}>
        <div className={styles.alert} />
        {user ? (
          <div className={styles.profile}>
            <ul id="profile-dropdown">
              <li>Profile</li>
              <li onClick={__signOut}> Sign Out </li>
            </ul>
          </div>
        ) : (
          <Link className="mt-2 btn btn-primary" to="/sign-up">
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    __signOut: () => dispatch(signOut()),
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
)(Header);
