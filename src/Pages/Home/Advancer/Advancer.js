// This is for important file
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImage from '../../../Images/about-images.jpg';
import about1 from '../../../Images/about-1.jpg';
import about2 from '../../../Images/about-2.jpg';
import about3 from '../../../Images/about-3.jpg';
import './Advancer.css';

// This is advancer component file
const Advancer = () => {
  return (
    // Here i added margin padding and important text in the file
    <div className="py-5 mb-5">
      <Container className="pb-3">
        <Row>
          <Col xs={12} md={7} className="img-margin">
            <img
              src={aboutImage}
              className="me-5 img-fluid img-margin"
              alt=""
            />
          </Col>
          <Col xs={12} md={5} className="">
            <h1 className="h1 display-3 fw-bolder ms-4">
              Best Adventure <br /> Tourer Bikes
            </h1>
            <p className="ms-4 mt-4">
              If you face any problem after buying from our store you will be
              able replace with new bike. Come now to replace. We provide 24/7
              support for hour valuable customer. If thing every time if
              valuable. For our buyer.
            </p>
            <div className="d-flex">
              <img src={about1} className="img-fluid me-3" alt="" />
              <img src={about2} className="img-fluid " alt="" />
              <img
                src={about3}
                className="img-fluid ms-3 display-none "
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advancer;
