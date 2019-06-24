/* eslint-disable react/prop-types */
import React from 'react';
export default class Form extends React.Component {
  state = {
    alert: null,
  };

  set(whatToSet) {
    return this.setState(whatToSet);
  }

  render() {
    const { onSubmit, modern, ...props } = this.props;
    if (modern) {
      props.children = props.children(this.state);
    }
    return (
      <form
        autoComplete="off"
        spellCheck={false}
        {...props}
        onSubmit={e => {
          e.preventDefault();
          const h = () => onSubmit && onSubmit();
          h();
        }}
      />
    );
  }
}
