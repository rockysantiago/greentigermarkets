import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/MarketData.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function MarketData() {
  const MarketDataContent = () => (
    <div>
      {/* Extra div to match original spacing */}
      <div className={styles['market-data-section']}>
        <Container>
          <Row>
            <Col sm={12}>
              <Link href="/">
                <a>
                  <img
                    src="/logo.png"
                    style={{ marginBottom: '32px', height: '46px' }}
                  />
                </a>
              </Link>
              <div
                style={{
                  fontSize: '32px',
                  color: 'white',
                  paddingBottom: '32px',
                }}
              >
                Market Data: Philippines Power Market
              </div>
              <div
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <iframe
                  height="1052px"
                  width="100%"
                  style={{ border: 'none' }}
                  src="https://admin-portal-zlbijybmrq-de.a.run.app/reports/preview-dark"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Market Data - Green Tiger Markets</title>
      </Head>
      <MarketDataContent />
    </>
  );
}
