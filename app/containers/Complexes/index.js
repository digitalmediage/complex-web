/* eslint-disable no-underscore-dangle */
/* eslint no-underscore-dangle: "error" */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectComplexes } from './selector';
import reducer from './reducer';
import saga from './saga';
import { requestComplex } from './actions';

import classnames from 'classnames';
import bs from 'bs';
import axios from 'axios';
import styles from './styles.css';
import Header from '../Layout/Header';
import ComplexCard from '../../components/ComplexCard';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
// import properties from '../../faker/properties';
import Error from '../../components/Errors';

export function Complexes({ complexes, loading, error, getComplexes }) {
  useInjectReducer({ key: 'complexes', reducer });
  useInjectSaga({ key: 'complexes', saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    getComplexes();
  }, []);

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
                <div className="breadcrumbs">complex</div>
                <ButtonPrimary title="New Complex" />
              </div>
            </div>
          </div>

          <div className={classnames(bs.row, bs['py-5'])}>
            <div className="col-12">
              <div className="d-flex flex-wrap flex-row justify-content-between">
                {complexes
                  ? complexes.map(_property => (
                      <ComplexCard
                        key={_property._id}
                        complexName="Complex Name"
                        subTitle="this is subtitle and some more text"
                        properties={_property}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Error>
  );
}

Complexes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    getComplexes: () => dispatch(requestComplex()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  complexes: makeSelectComplexes(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Complexes);
