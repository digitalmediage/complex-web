/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../containers/Home/styles.css';

const index = props => (
  <div className={styles.dateBox}>
    <div className={styles.dateTitleBox}>
      {props.data.status ? <p className={styles.reserved}>{props.data.status}</p> : null}
      <p className={styles.dateTitle}>{props.data.title}</p>
      <p className={styles.secondTitle}>{props.data.content}</p>
    </div>
    <div className={styles.dateText}>
      <p>{props.data.createdAt}</p>
    </div>
  </div>
);

export default index;
