/* eslint-disable react/prop-types */
import React from 'react';

const Avatar = props => {
  const stylesAvatar = {
    width: props.width || 50,
    height: props.height || 50,
    borderRadius: '100%',
  };

  return (
    <div className="avatar">
      <img
        style={stylesAvatar}
        className="img-fluid"
        src={props.src || ''}
        alt={props.alt || ''}
      />
    </div>
  );
};

export default Avatar;
