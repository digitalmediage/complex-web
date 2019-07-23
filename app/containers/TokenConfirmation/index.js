/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useEffect, memo } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import reducer from '../App/reducer';
import saga from '../Authentications/SignUp/saga';

import { makeSelectUser } from '../App/selectors';
import { getUser } from '../App/actions';

export function TokenConfirmation({ getUserProfile }) {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'sign-up', saga });

  useEffect(() => {
    getUserProfile();
  });

  return <div>your Account Verified Token</div>;
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserProfile: () => dispatch(getUser()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TokenConfirmation);

// const TokenConfirmation = () => {
//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (!user) {
//       window.location.replace('http://localhost:3000/sign-in');
//     } else {
//       const userVerified = user.isVerified;
//       if (userVerified && userVerified === 'true') {
//         localStorage.setItem('verified', user.isVerified);
//       } else {
//         window.location.replace('http://localhost:3000/');
//       }
//     }
//   }, []);
//   return <div>your Account Verified Token</div>;
// };

// export default TokenConfirmation;
