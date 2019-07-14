/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { push } from 'connected-react-router';

const TokenConfirmation = () => {
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      window.location.replace('http://localhost:3000/login');
    }
    console.log(user);
    console.log(user);
    console.log('-----------user--------');
    console.log(user);
    
  }, []);
  return <div>your Account Verified Token</div>;
};

export default TokenConfirmation;
