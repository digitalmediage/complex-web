/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/*
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
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
        <ul className={styles.centerBox}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/complex">Complexes</Link>
          </li>
          <li>
            <Link to="/property">Properties</Link>
          </li>
          <li>
            <Link to="/manager">Manager</Link>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
        </ul>
        <div className={styles.rightBox}>
          <div className={styles.alert} />
          <div className={styles.profile} />
        </div>
      </div>
    );
  }
}

export default Header;
