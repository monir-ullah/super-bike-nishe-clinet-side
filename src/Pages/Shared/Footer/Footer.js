// Import file
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import './Footer.css';

// THis is for the footer section
const Footer = () => {
  return (
    <div className="footer-menu">
      <Container>
        <Row className="newsleller p-5">
          <Col md={8}>
            <h6>NEWSLETTER</h6>
            <h2 className="h1 display-2 fw-bolder">Join Our Newsletter</h2>
            <p>
              Please Get in touch with us. We are awesome to bring you best bike
              for your comport able life any moving. You will be able to find.
            </p>
          </Col>
          <Col md={4}>
            <input
              className="w-100 p-2 mt-5 rounded-3 border-0"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              type="submit"
              className="btn rounded-3 btn-dark mt-2 w-100"
              value="Subscribe Now"
            />
          </Col>
        </Row>
      </Container>
      {/* This is for the main contant info */}
      <Container className="py-5 ">
        <div className="mt-5 pt-5 ">
          <Row className="mt-5 ">
            <Col xs={12} md={8}>
              <div className="responsive-footer">
                <img src={logo} className="mb-4" alt="" />
                <p className="mb-5">
                  We are awesome to bring you best bike for your comport able
                  life any moving. You will be able to find.Are you ready to to
                  go? We provide 24/7 support for hour valuable customer. If
                  thing every time if valuable. For our buyer.If you face any
                  problem after buying from our store you will be able replace
                  with new bike.
                </p>
              </div>
              <div>
                <h2>Contact</h2>
                <div className="d-flex mt-4">
                  <i class="fas fa-map-marker-alt me-4"></i>{' '}
                  <h6>4200 Hamill Avenue, San Diego, California 92109</h6>
                </div>
                <div className="d-flex  mt-3">
                  <i class="fas fa-phone-alt me-4"></i> <h6>021 3456 789</h6>
                </div>
                <div className="d-flex mt-2">
                  <i class="fas fa-envelope me-4"></i>{' '}
                  <h6>customer@roadpedal.com</h6>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <h4 className="mb-4">Menu</h4>
              <h6 className="mt-3">Services</h6>
              <h6 className="mt-3">Shop</h6>
              <h6 className="mt-3">Blog</h6>
              <h6 className="mb-3">Contact</h6>
              <h6 className="mb-3">Product</h6>
              <h6 className="mb-3">Location</h6>
            </Col>
            <Col xs={12} md={2}>
              <h4 className="mb-4">Service</h4>
              <h6>Bike Repair</h6>
              <h6>Bike Fitting</h6>
              <h6>Bike Rental</h6>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
