import React from 'react';
import styles from '../../containers/Home/styles.css';

const PropertiesList = () => (
  <div className={styles.propertiesList}>
    <div className={styles.property}>
      <div className={styles.propertiesImg}>
        <img
          alt="propert"
          className={styles.heartImg}
          src="../../images/likeblack.png"
        />
        <img
          alt="propert"
          className={styles.activeHeart}
          src="../../images/like.png"
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
            alt="propert"
            className={styles.serviceImg}
            src="../../images/bed.png'"
          />
          <p className={styles.serviceText}>3 Bedrooms</p>
        </div>
        <div className={styles.serviceBox}>
          <img
            alt="propert"
            className={styles.serviceImg}
            src="../../images/bathtub.png'"
          />
          <p className={styles.serviceText}>3 Bathrooms</p>
        </div>
      </div>
    </div>
    <div className={styles.property}>
      <div className={styles.propertiesImg}>
        <img
          alt="propert"
          className={styles.heartImg}
          src="../../images/likeblack.png"
        />
        <img
          alt="propert"
          className={styles.activeHeart}
          src="../../images/like.png"
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
            alt="propert"
            className={styles.serviceImg}
            src="../../images/bed.png'"
          />
          <p className={styles.serviceText}>3 Bedrooms</p>
        </div>
        <div className={styles.serviceBox}>
          <img
            alt="propert"
            className={styles.serviceImg}
            src="../../images/bathtub.png'"
          />
          <p className={styles.serviceText}>3 Bathrooms</p>
        </div>
      </div>
    </div>
    <div className={styles.property}>
      <div className={styles.propertiesImg}>
        <img
          className={styles.heartImg}
          alt="heart"
          src="../../images/likeblack.png"
        />
        <img
          className={styles.activeHeart}
          alt="heart"
          src="../../images/like.png"
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
            className={styles.serviceImg}
            alt="services"
            src="../../bed.png'"
          />
          <p className={styles.serviceText}>3 Bedrooms</p>
        </div>
        <div className={styles.serviceBox}>
          <img
            className={styles.serviceImg}
            alt="services"
            src="../../bathtub.png'"
          />
          <p className={styles.serviceText}>3 Bathrooms</p>
        </div>
      </div>
    </div>
    <div className={styles.property}>
      <div className={styles.propertiesImg}>
        <img
          className={styles.heartImg}
          alt="img"
          src="../../images/likeblack.png"
        />
        <img
          className={styles.activeHeart}
          alt="img"
          src="../../images/like.png"
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
            className={styles.serviceImg}
            alt="img"
            src="../../images/bed.png'"
          />
          <p className={styles.serviceText}>3 Bedrooms</p>
        </div>
        <div className={styles.serviceBox}>
          <img
            className={styles.serviceImg}
            alt="img"
            src="../../images/bathtub.png'"
          />
          <p className={styles.serviceText}>3 Bathrooms</p>
        </div>
      </div>
    </div>
  </div>
);

export default PropertiesList;
