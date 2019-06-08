/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styles from '../../containers/Home/styles.css';

const Notifications = () => (
  <div className={styles.news}>
    <div className={styles.date}>
      <ul className={styles.days}>
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul className={styles.numbers}>
        <li>
          <a>1</a>
        </li>
        <li>
          <a>2</a>
        </li>
        <li className={styles.active}>
          <a>3</a>
        </li>
        <li>
          <a>4</a>
        </li>
        <li>
          <a>5</a>
        </li>
        <li>
          <a>6</a>
        </li>
        <li>
          <a>7</a>
        </li>
      </ul>
    </div>
    <div className={styles.dateInfBox}>
      <div className={styles.dateBox}>
        <div className={styles.dateTitleBox}>
          <p className={styles.reserved}>Reserved</p>
          <p className={styles.dateTitle}>Property Name</p>
          <p className={styles.secondTitle}>Reserved</p>
        </div>
        <div className={styles.dateText}>
          <p>18 April 2019</p>
        </div>
      </div>

      <div className={styles.dateBox}>
        <div className={styles.dateTitleBox}>
          <p className={styles.reserved}>Reserved</p>
          <p className={styles.dateTitle}>Property Name</p>
          <p className={styles.secondTitle}>Reserved</p>
        </div>
        <div className={styles.dateText}>
          <p>18 April 2019</p>
        </div>
      </div>

      <div className={styles.dateBox}>
        <div className={styles.dateTitleBox}>
          <p className={styles.reserved}>Reserved</p>
          <p className={styles.dateTitle}>Property Name</p>
          <p className={styles.secondTitle}>Reserved</p>
        </div>
        <div className={styles.dateText}>
          <p>18 April 2019</p>
        </div>
      </div>
    </div>
  </div>
);

export default Notifications;
