import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicy() {
  const CookiePolicyContent = () => (
    <section className="bg-gray-1">
      <Container>
        <Row>
          <Col sm={12}>
            <p className="font-16 text-copy-1 pt32 pb56 border-bottom text-100">
              GTM Software Inc. dba Green Tiger Markets (together with its
              affiliates, “GTM”) and GTM’s third party service providers, and
              other partners may use cookies and other identification
              technologies on our websites, mobile applications, email
              communications, advertisements, and other online services
              (collectively, the "Services") for a number of purposes,
              including: authenticating users, remembering user preferences and
              settings, determining the popularity of content, delivering and
              measuring the effectiveness of marketing campaigns, analyzing site
              traffic and trends, assisting in delivering market data, and
              generally understanding the online behaviors of users.
            </p>
            <h2 className="text-primary-1 pt24">
              Cookies and Related Technologies Overview
            </h2>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <span className="flex-fill">
                  Cookies are small text files that are stored on your browser
                  or device by websites, apps, online media, and advertisements
                  that are used to remember your browser or device during and
                  across website visits. We also utilize other technologies that
                  may identify you or the devices you use. For example, “pixel
                  tags” (also called beacons) are small blocks of code installed
                  on (or called by) a webpage, app, or advertisement which can
                  retrieve certain information about your device and browser,
                  including for example: device type, operating system, browser
                  type and version, website visited, time of visit, referring
                  website, IP address, advertising identifiers, and other
                  similar information, including the small text file (the
                  cookie) that uniquely identifies the device. Pixels provide
                  the means by which third parties can set and read browser
                  cookies from a domain that they do not themselves operate and
                  collect information about visitors to that domain, typically
                  with the permission of the domain owner. “Local storage”
                  refers generally to other places on a browser or device where
                  information can be stored by websites, ads, or third parties
                  (such as HTML5 local storage and browser cache). “Software
                  Development Kits” (also called SDKs) function like pixels and
                  cookies, but operate in the mobile app context where pixels
                  and cookies cannot always function. The primary app developer
                  can install pieces of code (the SDK) from partners in the app,
                  and thereby allow the partner to collect certain information
                  about user interaction with the app and information about the
                  user device and network information.
                </span>
              </li>
            </ul>
            <h2 className="text-primary-1 pt24">Your Choices</h2>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <span className="flex-fill">
                  You have the right to choose whether or not to accept cookies:
                  Most web browsers are set to accept cookies by default, but
                  you can usually choose to set your browser to remove or reject
                  browser cookies. However, cookies may be an important part of
                  how certain aspects of our Services work, so you should be
                  aware that if you choose to refuse or remove cookies, this
                  could affect the availability and functionality of the
                  Services.
                  <br />
                  <br />
                  Removing or rejecting browser cookies does not necessarily
                  affect third-party flash cookies which may be used by us or
                  our partners in connection with our Services.
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );

  return (
    <div>
      <Head>
        <title>Cookie Policy - Green Tiger Markets</title>
      </Head>
      <Header
        title="Cookie Policy"
        subheading="Effective Date: September 30,2020"
      />
      <CookiePolicyContent />
      <Footer />
    </div>
  );
}
