import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  const PrivacyPolicyContent = () => (
    <div className="bg-gray-1" style={{ padding: '70px 0px' }}>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-primary-1">I. Introduction and overview</h2>
            <p className="font-16 text-copy-1 pt32 pb56 border-bottom text-100">
              This Policy describes the user data that Green Tiger Software Inc.
              (dba Green Tiger Markets, and together with its affiliates, “GTM”)
              collects, how it is used and shared, and your choices regarding
              this data. Please note that by accessing GTM’s website and/or
              using any GTM services, you consent to all the provisions of this
              Policy. All those subject to this Policy are referred to as
              “users” in this notice.
              <br />
              <br />
              GTM is the data controller for personal data collected in
              connection with use of GTM’s services and website. GTM may use
              third parties to collect and process user data, and user data may
              be stored on servers (whether physical or virtual) maintained
              either by GTM or by third parties (including without limitation
              third-party hosting vendors). We reserve the right to store and
              process personal data anywhere in the world.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <>
      <Head>
        <title>Privacy Policy - Green Tiger Markets</title>
      </Head>
      <Header
        title="Privacy Policy"
        subheading="Last modified: September 25, 2020"
      />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}
