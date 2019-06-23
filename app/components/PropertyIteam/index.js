/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import cx from 'classnames';
import styles from '../../containers/Home/styles.css';

import likeBlack from '../../images/like-black.png';
import like from '../../images/like.png';
import bed from '../../images/bed.png';
import bathtub from '../../images/bathtub.png';

const PropertyIteam = (props) => {
  
  const [liked, toggleLike] = useState('true');
  const { complex } = props.data;

  return (

  
    <React.Fragment>
      <div className={cx(styles.property, 'mr-3 mt-5')}>
        <div className={styles.propertiesImg}>
          <img
            onKeyPress={() => toggleLike(!liked)}
            className={cx(styles.activeHeart, 'img-fluid')}
            alt="img"
            onClick={() => toggleLike(!liked)}
            src={liked ? like : likeBlack}
          />
        </div>
        <div className={styles.propertiesDetail}>
          <p className={styles.propertiesSecondTitle}>
            { props.type }
            <span className={styles.propertiesText}>
              {props.size} m<sup>2</sup>
            </span>
          </p>
          <h5>{ props.data.price ? props.data.price.$numberDecimal : null   }</h5>
          <p className={styles.propertiesLocation}>{complex ? complex.country : null} , {complex ? complex.city : null}</p>
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
  )};


export default PropertyIteam;
