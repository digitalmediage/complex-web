/* eslint-disable import/named */
/*
 * Header
 *
 */

import React from 'react';
import styles from './styles.css';

export default function SignIn() {
  return (
    <div className={styles.header}>
      <div className={styles.leftBox}>
        <div />
        <p>En</p>
      </div>
      <ul className={styles.centerBox}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Complexes</a>
        </li>
        <li>
          <a href="/">Properties</a>
        </li>
        <li>
          <a href="/">Managers</a>
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
