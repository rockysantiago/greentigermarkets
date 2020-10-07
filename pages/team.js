import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import LogoRibbon from '../components/LogoRibbon';
import styles from '../styles/Team.module.css';

export default function Team() {
  const TeamHeader = () => (
    <div className={`pt0 ${styles['team-section']}`}>
      <Container className="pb64">
        <Row>
          <Col sm={12}>
            <LogoRibbon />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2 className="font-48 text-white pt64">
              Executive Team
              <br />
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );

  const TeamContent = () => (
    <div className={styles['team-content']}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="thumbnail-tile" style={{ height: 'auto' }}>
              <Container fluid className="p48 border-bottom">
                <Row>
                  <Col lg={4} className="text-center">
                    <div
                      className={`${styles['team-background-image']} thumbnail-round`}
                      style={{ backgroundImage: 'url(/team/john.jpg)' }}
                    />
                  </Col>
                  <Col lg={8}>
                    <div
                      className={`font-48 text-copy-2 mt32 text-500 ${styles['team-label']}`}
                    >
                      John Knorring
                    </div>
                    <div className="font-21 text-copy-1 mt8">CEO</div>
                    <p className="mt24">
                      John has worked in finance for over 18 years including
                      leadership roles at Goldman Sachs, DRW Commodities, and
                      was the former CEO of Abaxx Exchange and Clearing in
                      Singapore. He has deep expertise in most listed commodity
                      futures markets where he has managed risk and traded
                      proprietarily. John graduated from Princeton University
                      with an Operations Research and Financial Engineering
                      degree.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="p48 border-bottom">
                <Row>
                  <Col lg={4} className="text-center">
                    <div
                      className={`${styles['team-background-image']} thumbnail-round`}
                      style={{ backgroundImage: 'url(/team/carlos.jpg)' }}
                    />
                  </Col>
                  <Col lg={8}>
                    <div
                      className={`font-48 text-copy-2 mt32 text-500 ${styles['team-label']}`}
                    >
                      Carlos Korten
                    </div>
                    <div className="font-21 text-copy-1 mt8">President</div>
                    <p className="mt24">
                      Carlos has been designing and deploying technology
                      innovation solutions for over 25 years, including
                      leadership roles at Andersen Consulting and American
                      Express. A product strategist, veteran leader, software
                      developer and artist, he draws on diverse skills to drive
                      business growth. Carlos studied at the University of
                      Chicago, London School of Economics and Harvard
                      University.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="p48 border-bottom">
                <Row>
                  <Col lg={4} className="text-center">
                    <div
                      className={`${styles['team-background-image']} thumbnail-round`}
                      style={{ backgroundImage: 'url(/team/matt.png)' }}
                    />
                  </Col>
                  <Col lg={8}>
                    <div
                      className={`font-48 text-copy-2 mt32 text-500 ${styles['team-label']}`}
                    >
                      Matt Kelber
                    </div>
                    <div className="font-21 text-copy-1 mt8">CMO</div>
                    <p className="mt24">
                      Matt has over 25 years of experience in a variety of roles
                      including marketing, product development, and customer
                      experience. He was responsible for managing all customer
                      communications for Pershing LLC, a BNY Mellon company.
                      Prior to that, Matt led a variety of roles at American
                      Express where he grew revenue through marketing innovation
                      as well as successfully launched new products. Matt
                      received his MBA from Rutgers University and his BS in
                      Marketing at the University of Vermont.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="p48 border-bottom">
                <Row>
                  <Col lg={4} className="text-center">
                    <div
                      className={`${styles['team-background-image']} thumbnail-round`}
                      style={{ backgroundImage: 'url(/team/andrew.jpg)' }}
                    />
                  </Col>
                  <Col lg={8}>
                    <div
                      className={`font-48 text-copy-2 mt32 text-500 ${styles['team-label']}`}
                    >
                      Andrew Jacobs
                    </div>
                    <div className="font-21 text-copy-1 mt8">
                      Head of Legal and Regulatory Affairs
                    </div>
                    <p className="mt24">
                      Andrew has deep expertise managing the legal, regulatory,
                      financial, and operational functions of a number of
                      significant buyside financial firms. From 2011 to 2018,
                      Andrew was the Chief Operating Officer and General Counsel
                      of Jamison Capital Partners, which was one of the world’s
                      largest discretionary commodity investment managers.
                      Andrew studied at Harvard University and Harvard Law
                      School.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="p48 border-bottom">
                <Row>
                  <Col lg={4} className="text-center">
                    <div
                      className={`${styles['team-background-image']} thumbnail-round`}
                      style={{ backgroundImage: 'url(/team/suresh.jpg)' }}
                    />
                  </Col>
                  <Col lg={8}>
                    <div
                      className={`font-48 text-copy-2 mt32 text-500 ${styles['team-label']}`}
                    >
                      Suresh Dixit
                    </div>
                    <div className="font-21 text-copy-1 mt8">COO</div>
                    <p className="mt24">
                      Suresh brings over 30 years of business experience
                      including work for General Electric, AT&T and American
                      Express. Suresh is an e-commerce innovator, a Business
                      Architect, technology solution provider for Compliance,
                      Legal and Corporate Ethics. Among his roles, he served as
                      the Chief Operating Officer for a commodity exchange based
                      in Singapore, and as a Senior Business Strategist for a
                      Wealth Management business in the Caribbean.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="p48 border-bottom">
                <Row>
                  <Col lg={4} className="text-center">
                    <div
                      className={`${styles['team-background-image']} thumbnail-round`}
                      style={{
                        backgroundImage: 'url(/team/chiqui.jpg)',
                        backgroundPosition: '50% 8%',
                      }}
                    />
                  </Col>
                  <Col lg={8}>
                    <div
                      className={`font-48 text-copy-2 mt32 text-500 ${styles['team-label']}`}
                    >
                      Chiqui De Guzman
                    </div>
                    <div className="font-21 text-copy-1 mt8">Partnerships</div>
                    <p className="mt24">
                      Chiqui has 20 years experience in banking, managing a
                      global mixed portfolio of high net worth individuals and
                      corporate account focusing on growth and wealth fund
                      management. Chiqui’s success is built upon cultivating and
                      strengthening client and business relationships.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="p48 border-bottom">
                <Row>
                  <Col lg={4} className="text-center">
                    <div
                      className={`${styles['team-background-image']} thumbnail-round`}
                      style={{
                        backgroundImage: 'url(/team/mayette.jpg)',
                        backgroundPosition: '50% 8%',
                      }}
                    />
                  </Col>
                  <Col lg={8}>
                    <div
                      className={`font-48 text-copy-2 mt32 text-500 ${styles['team-label']}`}
                    >
                      Mayette Cidro Cubil
                    </div>
                    <div className="font-21 text-copy-1 mt8">Partnerships</div>
                    <p className="mt24">
                      Mayette has been in the field of Marketing, Business
                      Development, and Project Management for over 20 years. Her
                      experience spans multinationals to start-ups. Mayette led
                      the Starbucks wifi project in the Philippines and also
                      grew the marketing channel for 3 countries for Western
                      Union Singapore. Mayette’s success is built on her passion
                      for serving clients and working to design custom
                      commercial solutions for their needs.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <>
      <Head>
        <title>Team - Green Tiger Markets</title>
      </Head>
      <TeamHeader />
      <TeamContent />
      <Footer />
    </>
  );
}
