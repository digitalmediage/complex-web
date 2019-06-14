/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/*
 * ExecFileOptionsWithBufferEncoding
 *
 */

import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

class ExecFileOptionsWithBufferEncoding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className={styles.footerBox}>
        <div className={styles.footer}>
          <ul>
            <li className={styles.footerSocial}>
              <i
                className={classnames(
                  `styles.fas fa-map-marker-alt footer-pin`,
                )}
              />{' '}
              Blv. , Tiblisi , Georgia
            </li>
            <li className={styles.footerSocial}>
              <i className={classnames(`fas fa-phone-volume footer-phone`)} />
              +995 2233445566
            </li>
            <li className={styles.footerSocial}>
              <i className={classnames(`fas fa-envelope footer-mail`)} />
              info@gerproperties.ge
            </li>
            <li className={styles.socialBox}>
              <i
                className={classnames(`fab fa-facebook-f social-icon facebook`)}
              />
              <i className={classnames(`fab fa-instagram social-icon`)} />
              <i className={classnames(`fab fa-linkedin social-icon`)} />
              <p>(C) Gqo properties</p>
            </li>
          </ul>
          <ul>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerTitle} href="">
                About Us
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Mission
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Partners
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Team
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Certificates
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Facts & Figures
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Contact Us
              </a>
            </li>
          </ul>
          <ul>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerTitle} href="">
                Services
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Consulting
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Valuation
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Advisory
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Market Analysis
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Business Planning
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Legal Services
              </a>
            </li>
          </ul>
          <ul>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerTitle} href="">
                Projects
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Residental
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Commercial
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Industrial
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Complexes
              </a>
            </li>
            <li className={styles.footerTextBox}>
              <a href="/" className={styles.footerText} href="">
                Urban Deelopment
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default ExecFileOptionsWithBufferEncoding;
