/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import bs from 'bs';

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

  componentDidMount() {
    this.setState({
      banerImage: this.props.properties.image,
      banerDescription: this.props.properties.desc,
    });
  }

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
              {properties.media.map(img => (
                <div
                  onKeyPress={() => this.changeImageHandler(img)}
                  role="button"
                  tabIndex={0}
                  onClick={() => this.changeImageHandler(img)}
                >
                  <img
                    alt={img.name}
                    src={img.path}
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
                <p>{properties.name}</p>
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
                <p>{this.countStatusProperties(properties, 'left')} Left</p>
              </div>
            </div>

            {/* Complex properties */}
            <div className="d-flex pt-5 pl-4 textLite">Properties</div>
            <div className="d-flex pt-3 flex-wrap pl-4 flex-row">
              {properties.properties.map(_property => (
                <div className="card-properties_img">
                  <img
                    alt={_property.baner_image.name}
                    src={_property.baner_image.path}
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
