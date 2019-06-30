/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
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

import reducer from 'reducer';
import {
  makeSelectNews,
  makeSelectError,
  makeSelectLoading,
  makeSelectresponseStatus,
} from '../App/selectors';

import { newsRequest } from '../App/actions';
import saga from './saga';

import Header from '../Layout/Header';
import Button from '../../components/Button/ButtonPrimary';
import NormalInput from '../../components/NormalInput/field';
import news_image from '../../images/wood.jpg';
import NewsItem from './NewsItem';
require('./styles.css');

export function News({ news, loading, error, response_status, requestNews }) {
  useEffect(() => {
    console.log('component did mount');
    requestNews();
  }, []);

  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'news', saga });

  return (
    <div className="news-container pb-5">
      <Helmet>
        <title> News </title>
      </Helmet>
      <Header />
      <div className="container pt-5">
        <div className="col-12 pt-5">
          <div className="d-flex pt-4 justify-content-between">
            <span className="navigate-title">News</span>
            <Button title="Create News" />
          </div>
        </div>

        {/* Search Box */}
        <div className="row pt-5">
          <div className="col-12 pt-5">
            <div className="d-flex h-50 w-100  justify-content-center search-input-box p-2">
              <NormalInput
                search
                placeholder="Search"
                classname="search-input_"
              />
            </div>
          </div>
        </div>

        {/* News List */}
        {/* <div className="row pt-5">
            <div className="col-12"></div>
        </div> */}
        {news
          ? news.map(n => <NewsItem data={n} news_image={news_image} />)
          : null}
      </div>
    </div>
  );
}

News.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    requestNews: () => dispatch(newsRequest()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  news: makeSelectNews(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  response_status: makeSelectresponseStatus(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(News);
