import React from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import styles from '../SignIn/styles.css';
import Error from '../../../components/Errors';
import Footer from '../../Layout/Footer';

// Images
import location from '../../../images/pin.png';

const EmailVerfication = () => (
  <Error>
    <article>
      <Helmet>
        <title>SignUp Page</title>
        <meta name="description" content="this is SignIn page" />
      </Helmet>
      <div className={classnames(`signIn`)}>
        <h3 className={styles.loginTitle}> Email Verification </h3>
        <div className={styles.login}>
          <div className={styles.loginImg}>
            <img className={styles.locationImg} src={location} alt="complex" />
          </div>
          your Email Verification successfully! horaaaaaa
        </div>
      </div>
      <Footer />
    </article>
  </Error>
);

export default EmailVerfication;
