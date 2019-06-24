/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/**
 *
 * Manager
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getComplexes } from '../App/actions';

import Tab from '../../components/tabs/index';
import Avatar from '../../components/Avatar';
import Header from '../Layout/Header';
import { makeSelectComplexes } from '../App/selectors';

import reducer from '../App/reducer';
import saga from './saga';

require('./styles.css');

export function Manager({ complexes, _getComplexes }) {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'manager', saga });

  useEffect(() => {
    _getComplexes();
  }, []);
  return (
    <div className="manager-container">
      <Helmet>
        <title>Manager</title>
        <meta name="description" content="Description of Tes" />
      </Helmet>
      <Header />
      <div className="container pb-5">
        <div className="col-12 mb-5">
          <div className="breadcrumbs pt-4">Manager</div>
        </div>

        <div className="row mt-5 complexes-list">
          <div className="d-flex w-100 flex-row justify-content-around complexex-list-title">
            {console.log('complexes')}
            {console.log(complexes)}
            {complexes.map(complex => (
              <div className="d-flex flex-column justify-content-center text-center">
                <div
                  className="complex-item my-4"
                  style={{ backgroundImage: `url(${complex.baner_image.path}` }}
                />
                <div> manager name </div>
                <span>{complex.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-12 w-100 mt-5">
            <Tab>
              <div label="Charges">dadasdas</div>
              <div label="Expenses">dadasdas</div>
              <div label="Changer or add manager">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-row manager-filter pl-3 py-4">
                    <div className="d-flex justify-content-around">
                      <div className="manager-filter_button p-2">
                        All Managers
                      </div>
                      <div className="manager-filter_button p-2">
                        Current Manager
                      </div>
                      <div className="manager-filter_button p-2">
                        Last Managers
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mt-4">
                      <div className="manager-profile-section flex-md-row flex-column d-flex justify-content-around">
                        <div className="avatar-container">
                          <Avatar
                            src={
                              complexes[0]
                                ? complexes[0].baner_image.path
                                : null
                            }
                            width={200}
                            height={200}
                          />
                        </div>

                        <div className="manager-info h-75 justify-content-center d-flex flex-column mt-5 pl-3">
                          <div>Hamid Reza Nikoonia</div>
                          <span>tel: 232423523</span>
                          <span>email: hadsa@sds.dsd</span>
                        </div>

                        <div className="align-self-end">
                          Last Update: 29 JUN 2019 &nbsp; 12:20 PM
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mt-4">
                      <div className="manager-create-section flex-md-row flex-column d-flex justify-content-around">
                        <div className="avatar-container">
                          <Avatar
                            src={
                              complexes[0]
                                ? complexes[0].baner_image.path
                                : null
                            }
                            width={200}
                            height={200}
                          />
                        </div>

                        <div className="manager-info h-75 justify-content-center d-flex flex-column mt-5 pl-3">
                          <div>Hamid Reza Nikoonia</div>
                          <span>tel: 232423523</span>
                          <span>email: hadsa@sds.dsd</span>
                        </div>

                        <div className="align-self-end">
                          Last Update: 29 JUN 2019 &nbsp; 12:20 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Section */}
                </div>
              </div>
            </Tab>
          </div>
        </div>
      </div>
    </div>
  );
}

Manager.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    _getComplexes: () => dispatch(getComplexes()),
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
)(Manager);
