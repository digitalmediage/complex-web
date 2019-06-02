/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable import/named */
/*
 * Home
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.css';
// import globalStyle from '../../assets/global-styles/bootstrap.min.css';
import Header from '../Layout/Header/index';

export default function SignIn() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="this is Home page" />
      </Helmet>
      <Header />
      <div className={styles.container}>
        <div className={styles.grayBox}>
          <section className={styles.informationBox}>
            <div className={styles.news}>
              <div className={styles.date}>
                <ul className={styles.days}>
                  <li>Sun</li>
                  <li>Mon</li>
                  <li>Tue</li>
                  <li>Wed</li>
                  <li>Thu</li>
                  <li>Fri</li>
                  <li>Sat</li>
                </ul>
                <ul className={styles.numbers}>
                  <li>
                    <a>1</a>
                  </li>
                  <li>
                    <a>2</a>
                  </li>
                  <li className={styles.active}>
                    <a>3</a>
                  </li>
                  <li>
                    <a>4</a>
                  </li>
                  <li>
                    <a>5</a>
                  </li>
                  <li>
                    <a>6</a>
                  </li>
                  <li>
                    <a>7</a>
                  </li>
                </ul>
              </div>
              <div className={styles.dateInfBox}>
                <div className={styles.dateBox}>
                  <div className={styles.dateTitleBox}>
                    <p className={styles.reserved}>Reserved</p>
                    <p className={styles.dateTitle}>Property Name</p>
                    <p className={styles.secondTitle}>Reserved</p>
                  </div>
                  <div className={styles.dateText}>
                    <p>18 April 2019</p>
                  </div>
                </div>

                <div className={styles.dateBox}>
                  <div className={styles.dateTitleBox}>
                    <p className={styles.reserved}>Reserved</p>
                    <p className={styles.dateTitle}>Property Name</p>
                    <p className={styles.secondTitle}>Reserved</p>
                  </div>
                  <div className={styles.dateText}>
                    <p>18 April 2019</p>
                  </div>
                </div>

                <div className={styles.dateBox}>
                  <div className={styles.dateTitleBox}>
                    <p className={styles.reserved}>Reserved</p>
                    <p className={styles.dateTitle}>Property Name</p>
                    <p className={styles.secondTitle}>Reserved</p>
                  </div>
                  <div className={styles.dateText}>
                    <p>18 April 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.chart}>
              <div className={styles.whiteBoxChart}>
                <div className={styles.numberChart}>
                  <p className={styles.sold}>Sold</p>
                  <h1 className={styles.number}>
                    2412<sup className={styles.super}>Day</sup>
                    <sub className={styles.dollar}>$</sub>
                  </h1>
                </div>
                <div className={styles.timeChart}>
                  <div className={styles.timeBox}>
                    <p className={styles.price}>12.4 $</p>
                    <p className={styles.titlePrice}>year</p>
                  </div>
                  <div className={styles.timeBox}>
                    <p className={styles.price}>13 $</p>
                    <p className={styles.titlePrice}>today</p>
                  </div>
                </div>
              </div>
              <div className={styles.whiteBoxChart}>
                <div className={styles.numberChartBlue}>
                  <p className={styles.sold}>Reserved</p>
                  <h1 className={styles.number}>
                    89<sup className={styles.super}>Day</sup>
                    <sub className={styles.dollar}>$</sub>
                  </h1>
                </div>
                <div className={styles.timeChart}>
                  <div className={styles.timeBox}>
                    <p className={styles.priceBlue}>12.4 $</p>
                    <p className={styles.titlePrice}>year</p>
                  </div>
                  <div className={styles.timeBox}>
                    <p className={styles.priceBlue}>13 $</p>
                    <p className={styles.titlePrice}>today</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.whiteBox}>
          <div className={styles.tabs}>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link nav-active active" href="#">Complexes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Properties</a>
              </li>
            </ul>
            {/* complex component */}
            <div className={styles.complexList}>
              <div className={styles.complex}>
                <div className={styles.complexDetails}>
                  <div className={styles.complexImg}></div>
                  <div className={styles.complexContent}>
                    <div>
                      <h4 className={styles.complexTitle}>Complex Name</h4>
                      <p className={styles.complexSecondTitle}>short address placed here</p>
                    </div>
                    <div className={styles.complexInf}>
                      <div className={styles.complexDetailInf}>
                        <h6>Build Years</h6>
                        <p>2016/03/01</p>
                      </div>
                      <div className={styles.complexDetailInf}>
                        <h6>Cadastra</h6>
                        <p>63242749</p>
                      </div>
                      <div className={styles.complexDetailInf}>
                        <h6>Charge Fee</h6>
                        <p>$ 34</p>
                      </div>
                    </div>
                    <div className={styles.complexInf}>
                      <div className={styles.complexReserve}>
                        <p>4 reserved</p>
                      </div>
                      <div className={styles.complexReserve}>
                        <p>1 Sold</p>
                      </div>
                      <div className={styles.complexReserve}>
                        <p>6 Left</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.complexProperties}>
                    <p className={styles.complexSecondTitle}>Properties</p>
                    <div className={styles.complexPropertiesList}>
                      <div className={styles.complexPropertiesImg}><img src="../../images/building.png" alt="propert"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="../../images/building.png" alt="propert"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="../../images/building.png" alt="propert"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="../../images/building.png" alt="propert"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="../../images/building.png" alt="propert"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="../../images/building.png" alt="propert"></img></div>
                    </div>
                  </div>
                </div>
                <p className={styles.complexUpdate}>Last Update 2019/01/04</p>
              </div>
              <div className={styles.complex}>
                <div className={styles.complexDetails}>
                  <div className={styles.complexImg}></div>
                  <div className={styles.complexContent}>
                    <div>
                      <h4 className={styles.complexTitle}>Complex Name</h4>
                      <p className={styles.complexSecondTitle}>short address placed here</p>
                    </div>
                    <div className={styles.complexInf}>
                      <div className={styles.complexDetailInf}>
                        <h6>Build Years</h6>
                        <p>2016/03/01</p>
                      </div>
                      <div className={styles.complexDetailInf}>
                        <h6>Cadastra</h6>
                        <p>63242749</p>
                      </div>
                      <div className={styles.complexDetailInf}>
                        <h6>Charge Fee</h6>
                        <p>$ 34</p>
                      </div>
                    </div>
                    <div className={styles.complexInf}>
                      <div className={styles.complexReserve}>
                        <p>4 reserved</p>
                      </div>
                      <div className={styles.complexReserve}>
                        <p>1 Sold</p>
                      </div>
                      <div className={styles.complexReserve}>
                        <p>6 Left</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.complexProperties}>
                    <p className={styles.complexSecondTitle}>Properties</p>
                    <div className={styles.complexPropertiesList}>
                      <div className={styles.complexPropertiesImg}><img src="/app/assets/img/building.png" alt="img"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="/app/assets/img/building.png" alt="img"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="/app/assets/img/building.png" alt="img"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="/app/assets/img/building.png" alt="img"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="/app/assets/img/building.png" alt="img"></img></div>
                      <div className={styles.complexPropertiesImg}><img src="/app/assets/img/building.png" alt="img"></img></div>
                    </div>
                  </div>
                </div>
                <p className={styles.complexUpdate}>Last Update 2019/01/04</p>
              </div>
            </div>

            {/* Properties component */}
            <div className={styles.propertiesList}>
              <div className={styles.property}>
                <div className={styles.propertiesImg}>
                  <img alt="propert" className={styles.heartImg} src="../../images/likeblack.png"></img>
                  <img alt="propert" className={styles.activeHeart} src="../../images/like.png"></img>
                </div>
                <div className={styles.propertiesDetail}>
                  <p className={styles.propertiesSecondTitle}>
                    Apartment<span className={styles.propertiesText}>280 m<sup>2</sup></span>
                  </p>
                  <h5>$ 68,000</h5>
                  <p className={styles.propertiesLocation}>Saburtalo , Tbilisi</p>
                </div>
                <div className={styles.propertiesServices}>
                  <div className={styles.serviceBox}>
                    <img alt="propert" className={styles.serviceImg} src="../../images/bed.png'"></img>
                    <p className={styles.serviceText}>3 Bedrooms</p>
                  </div>
                  <div className={styles.serviceBox}>
                    <img alt="propert" className={styles.serviceImg} src="../../images/bathtub.png'"></img>
                    <p className={styles.serviceText}>3 Bathrooms</p>
                  </div>
                </div>
              </div>
              <div className={styles.property}>
                <div className={styles.propertiesImg}>
                  <img alt="propert" className={styles.heartImg} src="../../images/likeblack.png"></img>
                  <img alt="propert" className={styles.activeHeart} src="../../images/like.png"></img>
                </div>
                <div className={styles.propertiesDetail}>
                  <p className={styles.propertiesSecondTitle}>
                    Apartment<span className={styles.propertiesText}>280 m<sup>2</sup></span>
                  </p>
                  <h5>$ 68,000</h5>
                  <p className={styles.propertiesLocation}>Saburtalo , Tbilisi</p>
                </div>
                <div className={styles.propertiesServices}>
                  <div className={styles.serviceBox}>
                    <img alt="propert" className={styles.serviceImg} src="../../images/bed.png'"></img>
                    <p className={styles.serviceText}>3 Bedrooms</p>
                  </div>
                  <div className={styles.serviceBox}>
                    <img alt="propert" className={styles.serviceImg} src="../../images/bathtub.png'"></img>
                    <p className={styles.serviceText}>3 Bathrooms</p>
                  </div>
                </div>
              </div>
              <div className={styles.property}>
                <div className={styles.propertiesImg}>
                  <img className={styles.heartImg} alt="heart" src="../../images/likeblack.png"></img>
                  <img className={styles.activeHeart} alt="heart" src="../../images/like.png"></img>
                </div>
                <div className={styles.propertiesDetail}>
                  <p className={styles.propertiesSecondTitle}>
                    Apartment<span className={styles.propertiesText}>280 m<sup>2</sup></span>
                  </p>
                  <h5>$ 68,000</h5>
                  <p className={styles.propertiesLocation}>Saburtalo , Tbilisi</p>
                </div>
                <div className={styles.propertiesServices}>
                  <div className={styles.serviceBox}>
                    <img className={styles.serviceImg} alt="services" src="../../bed.png'"></img>
                    <p className={styles.serviceText}>3 Bedrooms</p>
                  </div>
                  <div className={styles.serviceBox}>
                    <img className={styles.serviceImg} alt="services" src="../../bathtub.png'"></img>
                    <p className={styles.serviceText}>3 Bathrooms</p>
                  </div>
                </div>
              </div>
              <div className={styles.property}>
                <div className={styles.propertiesImg}>
                  <img className={styles.heartImg} alt="img" src="../../images/likeblack.png"></img>
                  <img className={styles.activeHeart} alt="img" src="../../images/like.png"></img>
                </div>
                <div className={styles.propertiesDetail}>
                  <p className={styles.propertiesSecondTitle}>
                    Apartment<span className={styles.propertiesText}>280 m<sup>2</sup></span>
                  </p>
                  <h5>$ 68,000</h5>
                  <p className={styles.propertiesLocation}>Saburtalo , Tbilisi</p>
                </div>
                <div className={styles.propertiesServices}>
                  <div className={styles.serviceBox}>
                    <img className={styles.serviceImg} alt="img" src="../../images/bed.png'"></img>
                    <p className={styles.serviceText}>3 Bedrooms</p>
                  </div>
                  <div className={styles.serviceBox}>
                    <img className={styles.serviceImg} alt="img" src="../../images/bathtub.png'"></img>
                    <p className={styles.serviceText}>3 Bathrooms</p>
                  </div>
                </div>
              </div>

            </div>
            <div className={styles.btnBox}><button type="button" className={styles.moreBtn}>More</button></div>
          </div>
        </div>
      </div>
    </article>
  );
}
