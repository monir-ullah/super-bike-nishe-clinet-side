// THis is for the import file
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

// This is for login page
const Login = () => {
  // This is for set Login in data and to get user
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  // This is for locaiton and history
  const location = useLocation();
  const history = useHistory();

  // This is fo to collect data and sent it in the server
  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    //   This is the main COmponents
    <Container>
      <Grid container spacing={2} className="pb-5 mb-5  mx-auto">
        <Grid item sx={{ mt: 8 }} xs={12} className="pb-5 mb-5">
          <Typography gutterBottom variant="h3" className="text-success">
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%' }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: '75%' }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />

            <Button
              sx={{ width: '75%' }}
              type="submit"
              variant="contained"
              className="bg-success text-white text-center w-75 mt-3 text-center">
              Login
            </Button>
            <NavLink style={{ textDecoration: 'none' }} to="/register">
              <Button
                variant="text"
                className="bg-success text-white text-center w-75 mt-3 text-center">
                New User? Please Register
              </Button>
            </NavLink>
            {/* This will the a sippiner if the is not already loaded */}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert
                severity="success"
                className="bg-success text-white text-center w-75 mt-3 text-center">
                Login successfully!
              </Alert>
            )}
            {/* This will show error */}
            {authError && (
              <Alert
                severity="error"
                className="bg-success text-white text-center w-75 mt-3 text-center">
                {authError}
              </Alert>
            )}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
