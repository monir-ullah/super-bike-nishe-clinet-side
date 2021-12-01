// THis is import section

import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';

// This is for manage ALlo order SEciton
const ManageAllOrder = props => {
  const { productName, img, _id } = props.item;
  const [success, setSuccess] = useState(false);
  const handleApprovedSubmit = id => {
    const procceddConfirm = window.confirm('Are You Sure? To Update');
    if (procceddConfirm) {
      const url = `https://radiant-refuge-98661.herokuapp.com/manageAllOrder/${id}`;
      fetch(url, {
        method: 'PUT',
      }).then(res =>
        res.json().then(data => {
          if (data.modifiedCount) {
            console.log(data);
            setSuccess(true);
            alert(
              'Successfully Updated. Please Reload the Page to see the update'
            );
          }
        })
      );
    }
  };
  // Delete An Order
  const handleDeleteOrder = id => {
    const procceddConfirm = window.confirm('Are You Sure? You want to Delete.');
    if (procceddConfirm) {
      // This section will delete data
      const url1 = `https://radiant-refuge-98661.herokuapp.com/manageAllOrderCollection/${id}`;
      fetch(url1, {
        method: 'DELETE',
      }).then(res => res.json().then());
      // This section will delete data to
      const url2 = `https://radiant-refuge-98661.herokuapp.com/manageAllOrder/${id}`;
      fetch(url2, {
        method: 'DELETE',
      }).then(res =>
        res.json().then(data => {
          if (data.deletedCount > 0) {
            alert(
              'Deleted Successfully. To see the result Please Reload the page.'
            );
          }
        })
      );
    }
  };
  return (
    // This is the main shown data in the site
    <div className="py-5 ">
      <Container className="py-5">
        <Col className="border border-3 rounded-3 p-5">
          <h6>Name: {productName}</h6>
          <img src={img} alt="" className="rounded" width="80%" />
          <br />
          <br />
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDeleteOrder(_id);
            }}>
            Delete
          </button>
          <button
            className="btn btn-success ms-5 "
            onClick={() => {
              handleApprovedSubmit(_id);
            }}>
            Approved
          </button>
        </Col>
        {/* This will show the success info */}
        {success && <Alert severity="success">Shipped Successfully</Alert>}
      </Container>
    </div>
  );
};

export default ManageAllOrder;
// THis is end of the code
