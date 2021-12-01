// This if for imort file
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// Thisis for admin ROuter. Only admin can get the access page. in need
const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="info" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}></Redirect>
        )
      }></Route>
  );
};

export default AdminRoute;
// THis is end of the code
