/**
 *
 * Tes
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectComplex } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Get_COMPLEXS } from './actions';

export function Tes({ complex, clickHandler }) {
  useInjectReducer({ key: 'complex', reducer });
  useInjectSaga({ key: 'complex', saga });

  return (
    <div>
      <Helmet>
        <title>Tes</title>
        <meta name="description" content="Description of Tes" />
      </Helmet>
      <div>
        <h1> Complex List </h1>
        {console.log(complex)}
        {complex ? complex.map(m => <div> {m.city} </div>) : null}
      </div>
      <input type="text" />
      <button onClick={clickHandler}> click </button>
    </div>
  );
}

Tes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  complex: makeSelectComplex(),
});

function mapDispatchToProps(dispatch) {
  return {
    clickHandler: e => dispatch(Get_COMPLEXS()),
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
)(Tes);
