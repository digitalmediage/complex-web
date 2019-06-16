/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/*eslint no-underscore-dangle: "error"*/
import React from 'react';
import bs from 'bs';
import { Link } from 'react-router-dom';

// import image from '../../images/building.png';
require('./styles.css');

class ComplexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banerImage: '',
      banerDescription: '',
    };
  }

  componentWillMount() {
    this.setState({
      banerImage: this.props.properties.baner_image.path,
      banerDescription: this.props.properties.baner_image.description,
    });
  }


  // Calculate count of (Reserved/Sold/..) Properties in complex
  countStatusProperties(object = [], index) {
    if (typeof object !== 'object') {
      return null;
    }
    let count = 0;
    object.properties.map(property => {
      if (property.status === index) {
        count += 1;
      }
    });

    return count;
  }
  

  changeImageHandler(img) {
    this.setState({
      banerImage: img.path,
      banerDescription: img.name,
    });
  }

  render() {
    const { properties } = this.props;
    return (
      <div className="d-flex flex-column card-container pt-1 mb-5">
        <div className="card">
          <div className="card-image">
            <img
              alt={this.state.banerDescription}
              className={bs['img-fluid']}
              src={this.state.banerImage}
            />
            <span className=" d-flex flex-row card-tumb mr-4">
              {properties.media.map(m => (
                <div
                  key={m._id}
                  onKeyPress={() => this.changeImageHandler(m)}
                  role="button"
                  tabIndex={0}
                  onClick={() => this.changeImageHandler(m)}
                >
                  <img
                    alt={m.name}
                    src={m.path}
                    className={bs['img-fluid']}
                  />
                </div>
              ))}
            </span>
          </div>
          <div className="d-flex flex-column card-content">
            {/* Complex name and Views counter  */}
            <div className=" d-flex pl-2 flex-row justify-content-between card-header-title">
              <div>
                <Link to={`/complex/${properties._id}`}>
                  <p>{properties.name}</p>
                </Link>
                <span>{properties.information}</span>
              </div>
              <div>
                {properties.views_count}&nbsp;&nbsp;
                <i className="fontIcon icon-eye">&#xe800;</i>
              </div>
            </div>

            {/* Complex Tag  */}
            <div className="d-flex flex-row pt-4 justify-content-center">
              <div className="infoTag">
                <p>
                  {this.countStatusProperties(properties, 'reserved')} reserved
                </p>
              </div>

              <div className="infoTag">
                <p>{this.countStatusProperties(properties, 'sold')} Sold</p>
              </div>

              <div className="infoTag">
                <p>{this.countStatusProperties(properties, 'available')} Available</p>
              </div>
            </div>

            {/* Complex properties */}
            <div className="d-flex pt-5 pl-4 textLite">Properties</div>
            <div className="d-flex pt-3 flex-wrap pl-4 flex-row">
              {properties.properties.map(_property => (
                <div
                  key={_property._id}
                  className="card-properties_img">
                  <img
                    alt={_property.media.baner.name}
                    src={_property.media.baner.path}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>

            {/* Complex Options */}
            <div className="d-flex flex-row pt-3 justify-content-center">
              <div className="d-flex flex-column complex-options px-3">
                <div>Build Year</div>
                <div>{properties.build_year}</div>
              </div>
              <div className="d-flex flex-column complex-options px-3">
                <div>Cadastra</div>
                <div>{properties.cadastra}</div>
              </div>
              <div className="d-flex flex-column complex-options px-3">
                <div>Charge Fee</div>
                <div>
                  {' '}
                  {properties.currency} {properties.charge_fee.$numberDecimal}
                </div>
              </div>
              <div className="d-flex flex-column complex-options px-3">
                <div>City</div>
                <div>{properties.city}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComplexCard;
