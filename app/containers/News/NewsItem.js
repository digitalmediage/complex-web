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
        <h2 className="pb-3">{props.data.title}</h2>
        <dl
          style={{
            lineHeight: '-40px',
            color: 'gray',
            opacity: '0.6',
            fontSize: '0.8rem',
          }}
          className="pb-2"
        >
          {props.data.author}
        </dl>
        <p> {props.data.content}</p>
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
