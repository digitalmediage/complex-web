import React from 'react';
import classnames from 'classnames';
import bs from 'bs';
import styles from './styles.css';
import Header from '../Layout/Header';
import ComplexCard from '../../components/ComplexCard';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
// import axios from 'axios';
import properties from '../../faker/properties';

class Complex extends React.Component {
  constructor() {
    super();
    this.state = { properties: [] };
  }

  componentDidMount() {
    // axios.get('http://localhost:8080/v1/property').then(result => {
    //   this.setState({
    //     properties: result.data,
    //   });
    // });

    this.setState({
      properties,
    });
  }

  render() {
    return (
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

          <div className={classnames(bs.row, bs['pt-5'])}>
            <ComplexCard
              complexName="Complex Name"
              subTitle="this is subtitle and some more text"
              properties={this.state.properties || []}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Complex;