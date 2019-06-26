/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// /* eslint-disable jsx-a11y/label-has-associated-control */
// /* eslint-disable import/named */
// /*
//  * SignUp
//  *
//  * This is the first thing users see of our App, at the '/sign-up' route
//  */

// import React from 'react';
// import { Helmet } from 'react-helmet';
// import Error from '../../../components/Errors';
// import axios from 'axios';

// require('./styles.css');

// class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: '',
//       password: '',
//     };
//   }

//   signUpHandler() {
//     console.log(this.state.userName);
//     console.log(this.state.password);

//     const { userName, password } = this.state;

//     const user = {
//       email: userName,
//       password: password,
//     };

//     axios.post('http://localhost:8080/v1/auth/register', {
//       email: userName,
//       password: password,
//     })
//       .then(result => {
//         console.log('result');
//         console.log(result);
//       })
//       .catch(error => {
//         console.log(error.response);
//       })
//   }

//   setInput(event, input) {
//     const value = event.target.value;

//     if (input === 'userName') {
//       this.setState({
//         userName: value,
//       });
//     } else {
//       this.setState({
//         password: value,
//       });
//     }
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <Error>
//         <article className="container_body">
//           <Helmet>
//             <title>SignUp Page</title>
//             <meta name="description" content="this is SignUp page" />
//           </Helmet>
//           <div className="container">
//             <div className="row">
//               <div className="d-flex w-100 justify-content-center">
//                 <h1 className="header_title">
//                   <span>SIGN UP</span> GEO PROPERTIES
//                 </h1>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex h-75 sign-up-form flex-column">
//                   <div className="form-group">
//                     <label>User name</label>
//                     <input
//                       onBlur={e => this.setInput(e, 'userName')}
//                       type="text"
//                     />
//                   </div>

//                   <div className="form-group pt-4">
//                     <label>Password</label>
//                     <input
//                       onBlur={e => this.setInput(e, 'password')}
//                       type="password"
//                     />
//                   </div>

//                   <div className="form-group">
//                     <input
//                       onClick={() => this.signUpHandler()}
//                       className="btn btn-primary"
//                       type="button"
//                       value="Sign Up"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </article>
//       </Error>
//     );
//   }
// }

// export default SignUp;

/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/*
 * SignIn
 *
 * This is the first thing users see of our App, at the '/sign-in' route
 */

// import React from 'react';
// import { Helmet } from 'react-helmet';
// import axios from 'axios';

// // Styles
// import classnames from 'classnames';
// import styles from '../SignIn/styles.css';

// // Images
// import location from '../../../images/pin.png';

// // Components
// import Footer from '../../Layout/Footer';
// import Error from '../../../components/Errors';



// class SignUp extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: '',
//       password: '',
//       errors: [],
//       error: false,
//     }
//   }

//   signUpHandler(e) {
//     e.preventDefault();     
//     console.log(this.state.userName);
//     console.log(this.state.password);

//     const { userName, password } = this.state;

//     const user = {
//       email: userName,
//       password,
//     };

//     axios.post('http://localhost:8080/v1/auth/register', {
//       email: userName,
//       password,
//     })
//       .then(result => {
//         console.log('result');
//         console.log(result);

//       })
//       .catch(error => {
//         console.log(error.response);
//         console.log(error.response);

//         if(error.response) {
//           const data = error.response;
//           if(data.data.errors && data.data.errors !== 0) {
//             const err = [];
//             data.data.errors.map(error => {
//               console.log('error');
//               console.log(error);
//               err.push(error);
//             });

//             this.setState({
//               errors: err,
//             });

//           } else {
//             console.log('kir');
//           }
//         } else {
//           console.log('result not exist');
//         }
//       })
//   }

//   setInput(event, input) {
//     const {value} = event.target;

//     if (input === 'userName') {
//       this.setState({
//         userName: value,
//       });
//     } else {
//       this.setState({
//         password: value,
//       });
//     }
//   }

//   showError(errors) {
//     return (
//       <div className="danger alert">
//         {errors.messages.map(m => (
//           <span> m </span>
//         ))
//         } 
//       </div>
//     )
//   }

//   render() {
//     return(
//       <Error>
//         <article>
//           <Helmet>
//             <title>SignUp Page</title>
//             <meta name="description" content="this is SignIn page" />
//           </Helmet>
//           {this.state.errors !== 0 ? '-' : this.showError(this.state.errors)}
//           <div className={classnames(`signIn`)}>
//             <h3 className={styles.loginTitle}><span className={styles.loginTitleBlue}>SignUp</span> Geo.Properties</h3>
//             <div className={styles.login}>
//               <div className={styles.loginImg}>
//                 <img
//                   className={styles.locationImg}
//                   src={location}
//                   alt="complex"
//                 />
//               </div>
//               <form className={styles.loginForm}>
//                 <div className={classnames(`form-group formLogin`)}>
//                   {/* <label className={styles.labelInput}>Email</label> */}
//                   <input
//                     type="email"
//                     onBlur={e => this.setInput(e, 'userName')}
//                     className={styles.loginInput}
//                     placeholder="email"
//                   />
//                   <input
//                     type="password"
//                     onBlur={e => this.setInput(e, 'password')}
//                     className={styles.loginInput}
//                     placeholder="Password"
//                   />
//                 </div>
//                 <button
//                   className={styles.loginBtn} 
//                   variant="primary" 
//                   onClick={(e) => this.signUpHandler(e)}
//                 >
//               SignUp
//                 </button>
//               </form>
//             </div>
//           </div>
//           <Footer />
//         </article>
//       </Error>
//     )
//   }
// }

// export default SignUp;




import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Styles
import classnames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  signUp,
  changeEmail,
  changePassword,
} from '../../App/actions';

import {
  makeSelectUserEmail,
  makeSelectUserPassword,
  makeSelectLoading,
  makeSelectError,
  makeSelectresponseStatus,
} from '../../App/selectors';

import styles from '../SignIn/styles.css';

// Images
import location from '../../../images/pin.png';

// Components
import Footer from '../../Layout/Footer';
import Error from '../../../components/Errors';



import reducer from '../../App/reducer';
import saga from './saga';

export function SignUp({
  putSignUp,
  email,
  password,
  setPassword,
  setEmail,
  loading,
  error,
  responseStatus,
}) {

  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });

  const validate = (_email,_password) => {
    const emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (_email.length == 0 || _password.length == 0) {
      alert('please fill your input');
      return false;
    } else {
      if(_email == '' || _password == '') {
        alert('please fill form');
        return false;
      } 
      if (!emailReg.test(_email)) {
        alert('please fill correct email');
        return false;
      }

      if (!passwordReg.test(_password)) {
        alert('your password must at least one number, one lowercase and one uppercase letter and at least six characters');
        return false;
      }
        
    }

    return true;
      
  }

  return(
    <Error>
      <article>
        <Helmet>
          <title>SignUp Page</title>
          <meta name="description" content="this is SignIn page" />
        </Helmet>
        <div className={classnames(`signIn`)}>
          <h3 className={styles.loginTitle}><span className={styles.loginTitleBlue}>SignUp</span> Geo.Properties</h3>
          <div className={styles.login}>
            <div className={styles.loginImg}>
              <img
                className={styles.locationImg}
                src={location}
                alt="complex"
              />
            </div>
            {<form className={styles.loginForm}>
              {/* { console.log('we are in Component') }
              {  console.log(loading) }
              {console.log(email)}
              {  console.log(error)}    
              { console.log('we are in Component') } */}
              {loading ? <span className="alert danger">Loading</span> : null}
              {error ? <span>ERORORR{error}</span> : null}
              <div className={classnames(`form-group formLogin`)}>
                {/* <label className={styles.labelInput}>Email</label> */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.loginInput}
                  placeholder="email"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.loginInput}
                  placeholder="Password"
                />
              </div>
              <button
                type="button"
                onClick={() => putSignUp(validate, email, password)}
                className={styles.loginBtn} 
                variant="primary" 
              >
              SignUp
              </button>
            </form>}
          </div>
        </div>
        <Footer />
      </article>
    </Error>
  )

}


SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectUserEmail(),
  password: makeSelectUserPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  responseStatus: makeSelectresponseStatus(),
});


function mapDispatchToProps(dispatch) {
  return {
    setEmail: val => dispatch(changeEmail(val)),
    setPassword: val => dispatch(changePassword(val)),
    putSignUp: (validate, email, password) => {
      const v = validate(email, password);
      if(v) {
        dispatch(signUp())
      } else {
        return false;
      }},
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
)(SignUp);