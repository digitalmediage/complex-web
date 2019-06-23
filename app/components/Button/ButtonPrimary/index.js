/* eslint-disable react/prop-types */
import React from 'react';
import cx from 'classnames';
import bs from 'bs';
import styles from './styles.css';

const ButtonPrimary = props => (
  <div className={cx(styles.buttonPrimary, bs['px-4'], bs['py-2'])}>
    {props.title}
  </div>
);

export default ButtonPrimary;
