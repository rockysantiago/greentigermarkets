import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles['footer-gtm']}>
      <Container>
        <Row>
          <Col sm={3}>
            <Link href="/">
              <img
                className={styles.img}
                src="/logo_reverse_small1.svg"
                width="160"
              />
            </Link>
            <div className={`${styles['social-links']} pt16 pb32`}>
              <a href="https://www.facebook.com/greentigermarkets">
                <i
                  className="zmdi zmdi-facebook-box"
                  style={{ marginRight: '10px' }}
                />
              </a>
              <a href="https://twitter.com/GTMkts">
                <i
                  className="zmdi zmdi-twitter-box"
                  style={{ marginRight: '10px' }}
                />
              </a>
              <a href="https://www.linkedin.com/company/green-tiger-markets">
                <i className="zmdi zmdi-linkedin-box" />
              </a>
            </div>
          </Col>
          <Col sm={2}>
            <div style={{ fontWeight: 'bold' }}>TRADING</div>
            <ul className={`${styles['footer-link-list']} pt32 pb24`}>
              <li>
                <Link href="/market-data">
                  <a>Market Data</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={2}>
            <div style={{ fontWeight: 'bold' }}>ABOUT</div>
            <ul className={`${styles['footer-link-list']} pt32 pb24`}>
              <li>
                <Link href="/team">
                  <a>Our Team</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={2}>
            <div style={{ fontWeight: 'bold' }}>LEGAL</div>
            <ul className={`${styles['footer-link-list']} pt32 pb24`}>
              <li>
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy">
                  <a>Cookie Policy</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className={styles['copyright-text']}>
            2020 Copyright Green Tiger Markets. All rights reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
}
