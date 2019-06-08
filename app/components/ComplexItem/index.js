/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import styles from '../../containers/Home/styles.css';

import building from '../../images/building.png';

const ComplexItem = props => {
  return (
    <React.Fragment>
      <div className={styles.complexList}>
        <div className={styles.complex}>
          <div className={styles.complexDetails}>
            <div className={styles.complexImg} />
            <div className={styles.complexContent}>
              <div>
                <h4 className={styles.complexTitle}>{props.name}</h4>
                <p className={styles.complexSecondTitle}>{props.address}</p>
              </div>
              <div className={styles.complexInf}>
                <div className={styles.complexDetailInf}>
                  <h6>Build Years</h6>
                  <p>{props.buildYear}</p>
                </div>
                <div className={styles.complexDetailInf}>
                  <h6>Cadastra</h6>
                  <p>{props.cadastra}</p>
                </div>
                <div className={styles.complexDetailInf}>
                  <h6>Charge Fee</h6>
                  <p>$ {props.chargeFee}</p>
                </div>
              </div>
              <div className={styles.complexInf}>
                <div className={styles.complexReserve}>
                  <p>{props.reservedCount} reserved</p>
                </div>
                <div className={styles.complexReserve}>
                  <p>{props.soldCount} Sold</p>
                </div>
                <div className={styles.complexReserve}>
                  <p>{props.leftCount} Left</p>
                </div>
              </div>
            </div>
            <div className={styles.complexProperties}>
              <p className={styles.complexSecondTitle}>Properties</p>
              <div className={styles.complexPropertiesList}>
                <div className={styles.complexPropertiesImg}>
                  <img src={building} alt="propert" />
                </div>
                <div className={styles.complexPropertiesImg}>
                  <img src={building} alt="propert" />
                </div>
                <div className={styles.complexPropertiesImg}>
                  <img src={building} alt="propert" />
                </div>
                <div className={styles.complexPropertiesImg}>
                  <img src={building} alt="propert" />
                </div>
                <div className={styles.complexPropertiesImg}>
                  <img src={building} alt="propert" />
                </div>
                <div className={styles.complexPropertiesImg}>
                  <img src={building} alt="propert" />
                </div>
              </div>
            </div>
          </div>
          <p className={styles.complexUpdate}>Last Update {props.lastUpdate}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComplexItem;
