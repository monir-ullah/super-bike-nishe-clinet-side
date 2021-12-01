// This is use for import
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrder from './MyOrder';

const MyOrders = () => {
  // This is use for updating data
  const [manageOrder, setManageOrder] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    // This useEffect Use for taking data from fake DB
    const url = `https://radiant-refuge-98661.herokuapp.com/manageAllOrder?email=${user.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setManageOrder(data);
      });
  }, []);
  return (
    <div>
      <div className="p-5 mt-5">
        <Container>
          {/* THIs section will send the data to the Destination Page*/}

          <h3 className="text-center fw-bold display-5  pt-2">
            My <span className="text-success">Order List</span>
          </h3>
          <Row xs={1} md={3} className="g-4">
            {manageOrder.map(item => (
              <MyOrder item={item} key={item._id}></MyOrder>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyOrders;
