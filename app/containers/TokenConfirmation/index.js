/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';

const TokenConfirmation = () => {
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      window.location.replace('http://localhost:3000/login');
    } else {
      const userVerified = user.isVerified;
      if (userVerified && userVerified === 'true') {
        localStorage.setItem('verified', user.isVerified);
      } else {
        window.location.replace('http://localhost:3000/login');
      }
    }
  }, []);
  return <div>your Account Verified Token</div>;
};

export default TokenConfirmation;
