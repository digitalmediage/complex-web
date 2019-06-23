/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/*
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              <Link className="nav-item text-menu nav-link" to="/">
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
          <div className={styles.profile} />
        </div>
      </div>
    );
  }
}

export default Header;
