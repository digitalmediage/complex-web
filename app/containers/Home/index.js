/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable import/named */
/*
 * Home
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import bs from 'bs';
import classNames from 'classnames';
// import globalStyle from '../../assets/global-styles/bootstrap.min.css';
import Header from '../Layout/Header/index';
import Notifications from '../../components/Home/Notifications';
import Chart from '../../components/Chart';
import Tab from '../../components/tabs/index';
import ComplexItem from '../../components/ComplexItem';
import PropertiesList from '../../components/PropertiesList';


export default function SignIn() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="this is Home page" />
      </Helmet>
      <Header />
      <div className={bs.container}>
        <div className={bs.row}>
          <div className={bs['col-md-8']}>
            <Notifications />
          </div>

          <div className={classNames(bs['col-md-4'], bs['pt-5'])}>
            <Chart
              title="Sold"
              dayBalance="400"
              yearBalance="300"
              monthBalance="343"
            />
            <Chart
              title="Sold"
              dayBalance="400"
              yearBalance="300"
              monthBalance="343"
            />
          </div>
        </div>
        <div className={classNames(bs.row, bs['pt-5'])}>
          <div className={classNames(bs['col-12'], bs['pt-5'])}>
            <Tab>
              <div label="Complexes">
                <ComplexItem
                  name="complex name"
                  reservedCount="3 "
                  soldCount="1"
                  leftCount="3"
                  buildYear = "2016/03/01"
                  cadastra= "34325"
                  chargeFee="200"
                  lastUpdate = "2016/03/01"
                />
              </div>
              <div label="Properties">
                <PropertiesList />
              </div>
            </Tab>
          </div>
        </div>
      </div>
    </article>
  );
}
