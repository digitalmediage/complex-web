/* eslint-disable react/prop-types */
import React from 'react';

const NewsItem = props => (
  <div className="row no-gutters mt-5" style={{ backgroundColor: '#fff' }}>
    <div className="col-md-6 d-flex flex-column justify-content-start pt-5 pl-5 pb-5">
      <div className="d-flex pr-4 justify-content-end">
        <i className="fas mr-3 fa-pen " />

        <i className="fas fa-trash " />
      </div>
      <div className="d-flex flex-column p-3 pr-5 ">
        <h2 className="pb-3">What is Lorem Ipsum?</h2>
        <p>
          {' '}
          oum ha ever since the 1500s, when an unknown n bookive centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker includin
        </p>
      </div>
      <div>
        <button type="button" className="btn btn-primary rounded mt-3 ml-3">
          see more
        </button>
      </div>
    </div>
    <div className="col-md-6  d-flex">
      <img
        src={props.news_image}
        alt="search"
        className="img-fluid news_image"
      />
    </div>
  </div>
);

export default NewsItem;
