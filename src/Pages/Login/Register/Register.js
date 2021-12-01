// THis is for import file
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// This is for Registation page Here is user history , loading , user form the use auth
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  // THis is for onblue effect in the button
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  // This is handle log in  submit button in the page
  const handleLoginSubmit = e => {
    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    //   This information will sho w in hte whole page
    <Container>
      <Grid container className="pb-5 mb-5  mx-auto">
        <Grid item sx={{ mt: 8 }} xs={12} className="pb-5 mb-5">
          <Typography variant="h3" className="text-success" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="ReType Your Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <br />

              <Button
                sx={{ width: '75%', m: 1 }}
                type="submit"
                variant="contained"
                className="btn btn-success w-75 mt-3">
                Register
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Button variant="text" className="btn btn-success w-75 mt-3">
                  Already Registered? Please Login
                </Button>
              </NavLink>
            </form>
          )}
          {/* This will show a spinner is needed */}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert
              severity="success"
              className="bg-success text-white text-center w-75 mt-3">
              User Created successfully!
            </Alert>
          )}
          {/* This will show a error is needed */}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
