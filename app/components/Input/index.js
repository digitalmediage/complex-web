/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

function Input()  {
  // const { value } = this.props
  return (
    <div className={classnames("form-group", "formInput")}>
      <label className={styles.labelInput}>Build Year</label>
      <input readOnly type="email" className={classnames('form-control', 'inputRead')} placeholder='www' />
      {/* <input type="email" className="form-control" placeholder={value} /> */}
    </div>
  );
}

export default Input;