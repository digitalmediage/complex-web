/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
import React from 'react';

class Input extends React.Component {
  _value = this.props.defaultValue || null;

  _error = null;

  state = {
    error: null,
    errorMessage: null,
    value: this.props.defaultValue || null,
  };

  componentWillReceiveProps(props) {
    if (
      !this.havSetDefaultValue &&
      this.state._value === undefined &&
      props.defaultValue !== undefined
    ) {
      this.havSetDefaultValue = true;
      this.setValue(props.defaultValue);
    }
  }

  _id = null;

  id() {
    // eslint-disable-next-line prefer-template
    const defId = (this._id = (Math.random() + '').substr(2));
    return this._id ? this._id : defId;
  }

  errorMessage() {
    return (this.state.errorMessage ? this.state.errorMessage : '').replace(
      '{label}',
      '',
    );
  }

  value() {
    // eslint-disable-next-line no-underscore-dangle
    return this._value;
  }

  setError(type, msg) {
    this._error = type;
    this.setState({
      error: type,
      errorMessage: msg,
    });
  }

  hasError() {
    // eslint-disable-next-line no-underscore-dangle
    return !!this._error;
  }

  ensureValue(value = this._value) {
    const validations = Array.isArray(this.props.validation)
      ? this.props.validation
      : [this.props.validation];
    // eslint-disable-next-line no-restricted-syntax
    for (const i in validations) {
      const validation = validations[i];
      if (i > 0 && this.hasError()) {
        break;
      }
      validation && validation(this, value);
    }
    return this.hasError();
  }

  notifyBlured() {
    if (this.props.validateOnBlur !== false) {
      this.ensureValue();
    }
  }

  notifyChanged(value) {
    this.setValue(value);
    if (this.props.validateOnChange) {
      this.ensureValue(value);
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  setValue(value) {
    this._value = value;
    this.setState({
      value,
    });
  }
}

export default Input;
