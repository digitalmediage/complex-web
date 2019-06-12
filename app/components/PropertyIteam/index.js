/* eslint-disable prettier/prettier */
import React from 'react';
import cx from 'classnames';
import styles from '../../containers/Home/styles.css';

import likeBlack from '../../images/like-black.png';
// import like from '../../images/like.png';
import bed from '../../images/bed.png';
import bathtub from '../../images/bathtub.png';

const PropertyIteam = () => (
  <React.Fragment>
    <div className={cx(styles.property, 'mr-3 mt-5')}>
      <div className={styles.propertiesImg}>
        <img className={styles.heartImg} alt="img" src={likeBlack} />
        <img
          className={cx(styles.activeHeart, 'img-fluid')}
          alt="img"
          src={likeBlack}
        />
      </div>
      <div className={styles.propertiesDetail}>
        <p className={styles.propertiesSecondTitle}>
          Apartment
          <span className={styles.propertiesText}>
            280 m<sup>2</sup>
          </span>
        </p>
        <h5>$ 68,000</h5>
        <p className={styles.propertiesLocation}>Saburtalo , Tbilisi</p>
      </div>
      <div className={styles.propertiesServices}>
        <div className={styles.serviceBox}>
          <img
            className={cx(styles.serviceImg, 'img-fluid')}
            alt="img"
            src={bed}
          />
          <p className={styles.serviceText}>3 Bedrooms</p>
        </div>
        <div className={styles.serviceBox}>
          <img
            className={cx(styles.serviceImg, 'img-fluid')}
            alt="img"
            src={bathtub}
          />
          <p className={styles.serviceText}>3 Bathrooms</p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default PropertyIteam;
