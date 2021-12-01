// THis is import section
import React from 'react';
import { Col, Container } from 'react-bootstrap';

const MyOrder = props => {
  const { productName, img, _id, verified } = props.item;
  let verify = verified;
  let countVerify = '';
  if (verify === 'done') {
    countVerify = 'Already Shipped';
  } else {
    countVerify = 'Pending';
  }
  // Delete An Order
  const handleDeleteOrder = id => {
    const procceddConfirm = window.confirm('Are You Sure? You want to Delete.');
    if (procceddConfirm) {
      const url1 = `https://radiant-refuge-98661.herokuapp.com/manageAllOrderCollection/${id}`;
      fetch(url1, {
        method: 'DELETE',
      }).then(res => res.json().then());

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
    <div className="pb-5 ">
      <Container className="pb-5">
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

          <button className="ms-5 btn btn-success">{countVerify}</button>
        </Col>
      </Container>
    </div>
  );
};

export default MyOrder;
