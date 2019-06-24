/* eslint-disable react/prop-types */
import React from 'react';

const Hint = props => (
  <div
    className={`d-flex justify-content-between align-items-center ${
      props.hint === '\u00a0' ? 'lh1' : ''
    }`}
  >
    <span className="text-gray-700 font-size-7">{props.hint}</span>
    {props.minerHint ? (
      <span className="text-gray-700">{props.minerHint}</span>
    ) : null}
  </div>
);

export default Hint;
