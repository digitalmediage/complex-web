/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable import/named */
/*
 * Home
 *
 */


import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';



// Components

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import bs from 'bs';
import classNames from 'classnames';
import saga from "../Properties/saga";
import reducer from '../App/reducer';
// import globalStyle from '../../assets/global-styles/bootstrap.min.css';
import Header from '../Layout/Header/index';
import Notifications from '../../components/Home/Notifications';
import Chart from '../../components/Chart';
import Tab from '../../components/tabs/index';
import ComplexItem from '../../components/ComplexItem';
import PropertyIteam from '../../components/PropertyIteam';
import Error from '../../components/Errors';

import {
  makeSelectComplexes,
  makeSelectProperties,
  makeSelectError,
  makeSelectLoading,
} from '../App/selectors';

import { getProperties, getComplexes } from '../App/actions';

// Fake data
import fakerData from '../../faker/ChartData';




export function Home({
  // loading,
  // error,
  // complexes,
  properties,
  _getProperties,
  _getComplexes,
}) {

  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });

  useEffect(() => {
    _getProperties();
    _getComplexes();
  }, []);
  return (
    <Error>
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
                fakerData={fakerData()}
                color="red"
              />
              <Chart
                title="Sold"
                dayBalance="400"
                yearBalance="300"
                monthBalance="343"
                fakerData={fakerData()}
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
                <div className="d-flex flex-row flex-wrap" label="Properties">
                  {properties && Array.isArray(properties) ? properties.map(property => (
                    <PropertyIteam data={property} />
                  )) : null }
                </div>
              </Tab>
            </div>
          </div>
        </div>
      </article>
    </Error>
  );
}

Home.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  complexes: makeSelectComplexes(),
  properties: makeSelectProperties(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    _getProperties: () => dispatch(getProperties()),
    _getComplexes: () => dispatch(getComplexes()),
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
)(Home);
