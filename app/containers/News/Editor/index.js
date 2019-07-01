/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import reducer from '../../App/reducer';
import {
  makeSelectNews,
  makeSelectError,
  makeSelectLoading,
  makeSelectresponseStatus,
} from '../../App/selectors';

// import { newsRequest } from '../App/actions';
// import saga from './saga';

export function NewsEditor(props) {
  useInjectReducer({ key: 'global', reducer });
  //   useInjectSaga({ key: 'news', saga });

  const { news, loading, error } = props;
  const [title, setTitle] = useState(false);

  let data = [];

  if (news) {
    data = news.find(n => n._id === props.match.params.newsId);
  }

  return (
    <div className="news-container pb-5">
      <Helmet>
        <title> News </title>
      </Helmet>
      <div className="container">
        <div className="row pb-5">
          <div className="col-12">
            <span className="breadcrumbs"> News > Create News </span>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-12 pt-5 px-5 editor_container">
            <div className="d-flex p-5 mx-2 flex-column">
              <div className="news_title">
                <div onDoubleClick={() => setTitle(!title)}>
                  {title ? (
                    <h1 className="px-3">{data.title}</h1>
                  ) : (
                    <input value={data.title} />
                  )}
                </div>
              </div>
              <sub className="pt-5 news_author">
                {' '}
                Author: <span>{data.author}</span>
              </sub>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
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
)(NewsEditor);
