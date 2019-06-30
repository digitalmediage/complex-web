import React from 'react';
import Input from './inputFactory';
import Label from './label';
import Hint from './hint';

import eye from './image/eye.svg';
import search from './image/search.svg';

class Field extends Input {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      showEye: false,
    };
  }

  static defaultProps = {
    type: 'text',
    placeholder: '',
    hint: '\u00a0',
    dir: 'ltr',
  };

  renderHint() {
    if (!this.props.hint && !this.props.minerHint) {
      return null;
    }
    return <Hint hint={this.props.hint} minerHint={this.props.minerHint} />;
  }

  render() {
    const { props } = this;
    const errorColorMap = {
      danger: '#E91E63',
    };

    return (
      <div>
        <Label
          error={this.state.error}
          id={this.id()}
          label={props.label}
          errorMessage={this.errorMessage()}
        />
        <div className={`d-flex relative ${this.props.classname || ''}`}>
          <input
            className="form-control font-size-8 p-2"
            value={this.state.value}
            style={{
              textTransform: this.props.lowercase ? 'lowercase' : 'none',
              ...(props.prepend ? { borderRadius: '0 5px 5px 0' } : {}),
              ...(props.style || {}),
              borderColor: this.state.error
                ? errorColorMap[this.state.error]
                : undefined,
              ...(props.eng
                ? {
                  fontWeight: 500,
                  // fontFamily: 'sans-serif',
                    textAlign: 'left',
                }
                : {}),
            }}
            onBlur={e => {
              this.notifyBlured();
            }}
            name={`d${this.id()}`}
            id={this.id()}
            type={this.state.type}
            placeholder={props.placeholder}
            dir={
              ['password', 'number', 'email'].includes(props.type) || props.eng
                ? 'ltr'
                : props.dir
            }
            onChange={event => {
              const { target } = event;
              this.notifyChanged(target.value);
            }}
            onKeyUp={e => {
              if (this.state.type === 'password') {
                if (!this.state.value) {
                  this.setState({ showEye: false });
                } else this.setState({ showEye: true });
              }
            }}
            readOnly={props.isDisabled}
          />
          {props.showPass && this.state.showEye ? (
            <img
              src={eye}
              onClick={e =>
                this.setState({
                  type: this.state.type == 'password' ? 'text' : 'password',
                })
              }
              className="absolutemv pointer bg-white"
              style={{ right: '15px' }}
            />
          ) : null}
          {props.search ? (
            <img
              src={search}
              className="absolutemv search-icon-svg pointer bg-white"
            />
          ) : null}
          {props.prepend ? (
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{
                  border: '2px solid  rgb(218, 218, 218)',
                  borderRadius: '5px 0 0 5px',
                  borderRight: 0,
                }}
                id="basic-addon1"
              >
                {props.prepend}
              </span>
            </div>
          ) : null}
        </div>
        {this.renderHint()}
      </div>
    );
  }
}

export default Field;
