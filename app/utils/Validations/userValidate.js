/* eslint-disable no-else-return */
const validate = (_email, _password) => {
  const emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
  const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (_email.length == 0 || _password.length == 0) {
    alert('please fill your input');
    return false;
  } else {
    if (_email == '' || _password == '') {
      alert('please fill form');
      return false;
    }
    if (!emailReg.test(_email)) {
      alert('please fill correct email');
      return false;
    }

    if (!passwordReg.test(_password)) {
      alert(
        'your password must at least one number, one lowercase and one uppercase letter and at least six characters',
      );
      return false;
    }
  }

  return true;
};

export default validate;