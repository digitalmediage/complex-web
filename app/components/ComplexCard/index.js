/* eslint-disable react/prop-types */
import React from 'react';
import bs from 'bs';

import image from '../../images/building.png';
require('./styles.css');

class ComplexCard extends React.Component {
  componentDidMount() {
    return false;
  }

  render() {
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-image">
            <img
              alt="dasdas"
              className={bs['img-fluid']}
              src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
            />
            <span className=" d-flex flex-row card-tumb mr-4">
              <div>
                <img alt="" src={image} className={bs['img-fluid']} />
              </div>
              <div>
                <img alt="" src={image} className={bs['img-fluid']} />
              </div>
              <div>
                <img alt="" src={image} className={bs['img-fluid']} />
              </div>
            </span>
          </div>

          <div className="d-flex flex-column card-content">
            {/* Complex name and Views counter  */}
            <div className=" d-flex pl-2 flex-row justify-content-between card-header-title">
              <div>
                <p>{this.props.complexName}</p>
                <span>{this.props.subTitle}</span>
              </div>
              <div>
                39&nbsp;&nbsp;
                <i className="fontIcon icon-eye">&#xe800;</i>
              </div>
            </div>

            {/* Complex Tag  */}
            <div className="d-flex flex-row pt-4 justify-content-center">
              <div className="infoTag">
                <p>{this.props.reservedCount} reserved</p>
              </div>

              <div className="infoTag">
                <p>{this.props.reservedCount} reserved</p>
              </div>

              <div className="infoTag">
                <p>{this.props.reservedCount} reserved</p>
              </div>
            </div>

            {/* Complex properties */}
            <div className="d-flex pt-5 pl-4 textLite">Properties</div>
            <div className="d-flex pt-3 flex-wrap pl-4 flex-row">
              {this.props.properties.map(_property => (
                <div className="card-properties_img">
                  <img
                    alt={_property.alt || ' '}
                    src={_property.image}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>

            {/* Complex Options */}
            <div className="d-flex flex-row pt-3 justify-content-center">
              <div className="d-flex flex-column complex-options px-3">
                <div>Build Year</div>
                <div>12/03/1999</div>
              </div>
              <div className="d-flex flex-column complex-options px-3">
                <div>Cadastra</div>
                <div>45433524</div>
              </div>
              <div className="d-flex flex-column complex-options px-3">
                <div>Charge Fee</div>
                <div>$ 4433</div>
              </div>
              <div className="d-flex flex-column complex-options px-3">
                <div>City</div>
                <div>Tehran</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComplexCard;
