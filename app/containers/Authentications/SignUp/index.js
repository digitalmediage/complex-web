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

import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import styles from './styles.css';
import location from '../../../images/pin.png';
import Footer from '../../Layout/Footer';

export default function SignIn() {
  return (
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
          <form className={styles.loginForm}>
            <div className={classnames(`form-group formLogin`)}>
              {/* <label className={styles.labelInput}>Email</label> */}
              <input
                type="email"
                className={styles.loginInput}
                placeholder="email"
              />
              <input
                type="password"
                className={styles.loginInput}
                placeholder="Password"
              />
            </div>
            <button className={styles.loginBtn} variant="primary" type="submit">
              SignUp
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </article>
  );
}
