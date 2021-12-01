// This is for import file
import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

// This if for make admin
const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const handleOnBlur = e => {
    setEmail(e.target.value);
  };
  // This will update mongodb server info
  const handleAdminSubmit = e => {
    const user = { email };
    fetch('https://radiant-refuge-98661.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
          setEmail();
        }
      });
    e.preventDefault();
  };
  return (
    // This is the mian content that will show in the website
    <div className="py-5 my-5">
      <Container className="py-5 my-5">
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: '50%' }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <br />
          <br />
          <Button type="submit" variant="contained" className="bg-success">
            Make Admin
          </Button>
        </form>
        {success && <Alert severity="success">Made Admin successfully!</Alert>}
      </Container>
    </div>
  );
};

export default MakeAdmin;

// End of the code
