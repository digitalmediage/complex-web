/* eslint-disable no-underscore-dangle */
/* eslint no-underscore-dangle: "error" */
import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import classnames from 'classnames';
import bs from 'bs';
import styles from './styles.css';
import Header from '../Layout/Header';
import PropertyIteam from '../../components/PropertyIteam';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import Error from '../../components/Errors';

import {
  makeSelectComplexes,
  makeSelectProperties,
  makeSelectError,
  makeSelectLoading,

} from '../App/selectors';

import {getProperties, getComplexes} from '../App/actions';

import reducer from '../App/reducer';
import saga from './saga';

export function Property({
  loading,
  error,
  complexes,
  properties,
  _getProperties,
  _getComplexes,
}) {

   useInjectReducer({ key: 'global', reducer });
   useInjectSaga({ key: 'global', saga });

    useEffect(() => {
      _getProperties();
      _getComplexes();
      console.log('use effect change');
    }, []);

    const [filterType, setFilterType ]= useState('type');
    const filtersType = ['office', 'commercial', 'residence '];
    const filtersStatus = ['reserved', 'sold', 'available '];
    const filtersFurnish = ['black', 'white'];

    const setOptions = (state) => {
      let options = [];
      switch (state) {
       case 'type':
       options = filtersType;
       break;
       case 'status':
       options = filtersStatus;
       break;
       case 'furnish':
       options = filtersFurnish;
       break;
       default :
       options = filtersType;
      }

      return options;
    }

  return (
    <Error>
      <section className={styles.complexContainer}>
        <Header />
        <div className={classnames(bs.container, 'complexContainer')}>
          <div className={classnames(bs.row, bs['pt-4'])}>
            <div className={bs['col-12']}>
              <div
                className={classnames(
                  bs['d-flex'],
                  bs['justify-content-between'],
                )}
              >
                <div className="breadcrumbs">property</div>
                <ButtonPrimary title="New Property" />
              </div>
            </div>
          </div>
          <div className={classnames('propertyPage')}>
            <div className={classnames(`form-group filters`)}>
              <input
                className={styles.filterWidth}
                type="text"
                placeholder="Sort"
              />
              <div className={styles.filterWidth}>
                <select>
                  {complexes ? complexes.map(complex => (
                    <option key={complex._id}> {complex.name} </option>
                  )) : null}
                </select>
              </div>
              <div className={styles.filterWidth}>
              {
                  filterType
                }
                <select onChange={(e) => setFilterType(e.target.value)}>
                
                  <option value="type"> Type </option>
                  <option value="status"> Sales status  </option>
                  <option value="furnish"> furnish </option>
                </select>
              </div>
              <input
                className={styles.filterWidth}
                type="text"
                placeholder="Sort"
              />
            </div>
            <div className={styles.filterBox}>
              <p className={styles.type}>Type</p>
              <div className={styles.filterText}>
                
                {setOptions(filterType).map(f => (
                <div className={styles.contentText}>
                  {f}
                  <p className={styles.circleType} />
                </div>
                ))}

              </div>
            </div>
            <div className="d-flex flex-row flex-wrap" label="Properties">
              { properties ? properties.map(property => (
                <PropertyIteam data={property} />
              )) : null }
            </div>
          </div>
        </div>
      </section>
    </Error>
  );
}

Property.propTypes = {
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
)(Property);