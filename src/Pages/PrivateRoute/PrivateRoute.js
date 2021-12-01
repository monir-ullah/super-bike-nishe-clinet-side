// THis is for import file
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// This is for private ROute
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  // THis is for Laoding
  if (isLoading) {
    return <Spinner animation="border" variant="info" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}></Redirect>
        )
      }></Route>
  );
};

export default PrivateRoute;
// This is end of the code
