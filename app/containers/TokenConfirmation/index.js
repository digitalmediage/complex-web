/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { push } from 'connected-react-router';

const TokenConfirmation = () => {
  useEffect(() => {
    window.location.replace('http://localhost:3000');
  }, []);
  return <div>your Account Verified Token</div>;
};

export default TokenConfirmation;
