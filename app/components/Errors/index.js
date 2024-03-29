/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.setState({
      hasError: true,
    });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <h1> Something went wrong. </h1>;
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
