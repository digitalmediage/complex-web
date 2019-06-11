/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../containers/Home/styles.css';

const index = props => (
  <div className={styles.dateBox}>
    <div className={styles.dateTitleBox}>
      <p className={styles.reserved}>{props.status}</p>
      <p className={styles.dateTitle}>{props.title}</p>
      <p className={styles.secondTitle}>{props.desc}</p>
    </div>
    <div className={styles.dateText}>
      <p>{props.date}</p>
    </div>
  </div>
);

export default index;
