/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint no-underscore-dangle: "error" */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import bs from 'bs';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectComplexes,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import reducer from '../App/reducer';
import saga from './saga';
import { getComplexes } from '../App/actions';

// import axios from 'axios';
import styles from './styles.css';
import Header from '../Layout/Header';
import ComplexCard from '../../components/ComplexCard';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
// import properties from '../../faker/properties';
import Error from '../../components/Errors';

// const Loading = () => <div className="alert success">Loading .........</div>;

export function Complexes({
  complexes,
  // loading,
  // error,
  __getComplexes,
}) {
  useInjectReducer({ key: 'global ', reducer });
  useInjectSaga({ key: 'complexes', saga });

  useEffect(() => {
    __getComplexes();
  }, []);

  return (
    <Error>
      {/* {loading ? <Loading /> : null} */}
      <Helmet>
        <title> </title>
      </Helmet>
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
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    __getComplexes: () => dispatch(getComplexes()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  complexes: makeSelectComplexes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Complexes);
