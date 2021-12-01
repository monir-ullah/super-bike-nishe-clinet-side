// This is for important file
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Support.css';

// This is for Support Components .
const Support = () => {
  return (
    //   Here i added some info.
    <div className="pb-5 bg-color">
      <Container className="my-5">
        <div className="d-flex text-center">
          <Row className="pt-5 mt-3">
            <Col xs={12} md={4} className="my-3">
              <div className="mb-3">
                <i className="fas fa-truck h1 display-6 fw-bolder "></i>
              </div>
              <div>
                <h5>FREE SHIPPING</h5>
                <p>
                  You Will get free shipping for all our bike if your buy
                  online. To get free shipping order now.{' '}
                </p>
              </div>
            </Col>
            {/* This is for 24/7 support */}
            <Col xs={12} md={4} className="my-3">
              <div className="mb-3">
                {' '}
                <i className="fas fa-phone-alt h1 display-6 fw-bolder "></i>{' '}
              </div>
              <div>
                <h5>24/7 Support</h5>
                <p>
                  We provide 24/7 support for hour valuable customer. If thing
                  every time if valuable. For our buyer.
                </p>
              </div>
            </Col>

            {/* This is for 30-days free return feature */}
            <Col xs={12} md={4} className="my-3">
              <div className="mb-3">
                <i className="fas fa-reply h1 display-6 fw-bolder "></i>
              </div>
              <div>
                <h5>30-DAYS FREE RETURN</h5>
                <p>
                  If you face any problem after buying from our store you will
                  be able replace with new bike. Come now to replace.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Support;
