/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import LineChart from './Chart/LineChart';

import styles from '../containers/Home/styles.css';

class componentName extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.whiteBoxChart}>
          <div className={styles.numberChart}>
            <p className={styles.sold}>{this.props.title}</p>
            <h1 className={styles.number}>
              {this.props.dayBalance}
              <sup className={styles.super}>Day</sup>
              <sub className={styles.dollar}>$</sub>
            </h1>
          </div>
          <div>
            <LineChart color={this.props.color} data={this.props.fakerData} />
          </div>
          <div className={styles.timeChart}>
            <div className={styles.timeBox}>
              <p className={styles.price}>{this.props.yearBalance} $</p>
              <p className={styles.titlePrice}>year</p>
            </div>
            <div className={styles.timeBox}>
              <p className={styles.price}>{this.props.monthBalance} $</p>
              <p className={styles.titlePrice}>month</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default componentName;
