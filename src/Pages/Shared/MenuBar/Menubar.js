// THis is for the importf file
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Menubar.css';

// This is for the manu bar section
const Menubar = () => {
  const { user, logout, admin } = useAuth();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
      className="bg-width"
      sticky="top">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-link">
            <Link to="/home">
              <h6>Home</h6>
            </Link>
            <Link to="/products">
              <h6>Products</h6>
            </Link>
          </Nav>
          <Nav className="nav-link">
            {user?.email ? (
              <div>
                {/* THis is  for admin user */}
                {admin ? (
                  <>
                    <Link to="/makeAdmin" className="me-2">
                      Make Admin
                    </Link>

                    <Link to="/addProduct" className="me-2">
                      Add Product
                    </Link>
                    <Link to="/manageAllOrders" className="me-2">
                      Manage All Orders
                    </Link>
                  </>
                ) : (
                  <>
                    {/* This is for Normal SUEr */}
                    <Link to="/addReview" className="me-2">
                      Add Review
                    </Link>
                    <Link to="/myOrders" className="me-2">
                      My Order
                    </Link>
                    <Link to="/pay" className="me-2">
                      Pay{' '}
                    </Link>
                  </>
                )}

                <Link to="/login" className="ms-5" onClick={logout}>
                  Logout <span> -- {user.email}</span>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login">Login</Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
// This is end of the code
