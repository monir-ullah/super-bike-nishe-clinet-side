// This is import all important file
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

// This is Header Component Start
const Header = () => {
  return (
    //   THis text part in the SEction
    <div className="main-header">
      <Container>
        <div className="header-info ">
          <h6 className="text-success"> WELCOME</h6>

          <h1 className="h1 display-2 fw-bolder">
            Full Suspension <br /> Mountain Bikes{' '}
          </h1>

          <Link to="/products">
            <button className="btn btn-success">Explore More</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
