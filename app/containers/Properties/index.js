import React from 'react';
import classnames from 'classnames';
import bs from 'bs';
import styles from './styles.css';
import Header from '../Layout/Header';
import PropertyIteam from '../../components/PropertyIteam';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import Error from '../../components/Errors';

export default function Property() {
  return (
    <Error>
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
                <div className="breadcrumbs">property</div>
                <ButtonPrimary title="New Property" />
              </div>
            </div>
          </div>
          <div className={classnames('propertyPage')}>
            <div className={classnames(`form-group filters`)}>
              <input
                className={styles.filterWidth}
                type="text"
                placeholder="Sort"
              />
              <div className={styles.filterWidth}>
                <button
                  className={classnames(`btn dropdown-toggle buttonFilter`)}
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                  <a className="dropdown-item" href="/">
                    Separated link
                  </a>
                </div>
              </div>
              <div className={styles.filterWidth}>
                <button
                  className={classnames(`btn dropdown-toggle buttonFilter`)}
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                  <a className="dropdown-item" href="/">
                    Separated link
                  </a>
                </div>
              </div>
              <input
                className={styles.filterWidth}
                type="text"
                placeholder="Sort"
              />
            </div>
            <div className={styles.filterBox}>
              <p className={styles.type}>Type</p>
              <div className={styles.filterText}>
                <p className={styles.contentText}>
                  Apartment
                  <p className={styles.circleType} />
                </p>
                <p className={styles.contentText}>
                  Office
                  <p className={styles.circleType} />
                </p>
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap" label="Properties">
              <PropertyIteam />
              <PropertyIteam />
              <PropertyIteam />
              <PropertyIteam />
              <PropertyIteam />
              <PropertyIteam />
              <PropertyIteam />
            </div>
          </div>
        </div>
      </section>
    </Error>
  );
}
