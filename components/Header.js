import { Container, Row, Col } from 'react-bootstrap';
import LogoRibbon from './LogoRibbon';

export default function Header(props) {
  return (
    <div
      className="pt0"
      style={{ backgroundColor: '#004B3D', paddingBottom: '70px' }}
    >
      <Container>
        <Row>
          <Col md={12}>
            <LogoRibbon />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2 className="font-48 text-white pt64">
              Green Tiger Market
              <br />
              {props.title}
            </h2>
            <div className="text-white-2 font-21 pt40">{props.subheading}</div>
          </Col>
          <Col md={6} className="text-center pt64 pb64">
            <img src="/gtm_privacy1.svg" width="178" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
