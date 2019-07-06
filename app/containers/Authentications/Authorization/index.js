/* eslint-disable no-else-return */
/* eslint-disable lines-between-class-members */
// Authorization HOC

import React from 'react';
import { Redirect } from 'react-router-dom';

const Authorization = (WrappedComponent, allowedRoles) => {
  return class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);

      /**
      * Warning: This lifecycle is currently deprecated, and will be removed in React version 17+
      More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
      */
      this.state = {
        user: '',
      };
    }

    componentDidMount() {
      const currentUserRoles = localStorage.getItem('user');
      const currentUserRolesJSON = JSON.parse(currentUserRoles);
      console.log(currentUserRolesJSON.role);
      console.log(currentUserRolesJSON.role);
      this.setState({
        user: currentUserRolesJSON.role,
      });
    }

    render() {
      const { user } = this.state;
      if (allowedRoles.includes(user)) {
        console.log('user allowed !');
        return <WrappedComponent {...this.props} />;
      } else {
        return null;
      }
    }
  };
};

export default Authorization;
