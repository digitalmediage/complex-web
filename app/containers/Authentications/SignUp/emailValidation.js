import React from 'react';
import classnames from 'classnames';
import styles from '../SignIn/styles.css';

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
          <h3 className={styles.loginTitle}><span className={styles.loginTitleBlue}>SignUp</span> Geo.Properties</h3>
          <div className={styles.login}>
            <div className={styles.loginImg}>
              <img
                className={styles.locationImg}
                src={location}
                alt="complex"
              />
            </div>
            Verfication succesfully
          </div>
        </div>
        <Footer />
      </article>
    </Error>
)

export default EmailVerfication;