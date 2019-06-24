import React from 'react';
export default props => (
  <div className={`${props.error ? 'text-red' : 'text-gray-800'}`}>
    {props.label ? <label className="font-size-9 m-0" htmlFor={props.id}>{props.label}</label> : null}
    {/* props.isRequired ? <span className="font-size1-1 pr-2">*</span> : null*/}
    {props.errorMessage}
  </div>
);
