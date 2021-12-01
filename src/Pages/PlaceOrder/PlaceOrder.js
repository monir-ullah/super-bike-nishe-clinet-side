// This is for import file
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

// Thisis for place order page
const PlaceOrder = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    setIsLoading(true);
    console.log(data);
    // This section will add order in the server mongodb
    axios
      .post('https://radiant-refuge-98661.herokuapp.com/manageAllOrder', data)
      .then(res => {});
    axios
      .post(
        'https://radiant-refuge-98661.herokuapp.com/manageAllOrderCollection',
        data
      )
      .then(res => {
        if (res.data.insertedId) {
          setIsLoading(false);
          reset();
          alert('Successfully Order in the Mongodb Server');
        }
      });
  };
  // This is for load data in the client side
  useEffect(() => {
    const url = `https://radiant-refuge-98661.herokuapp.com/products/${serviceId}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDetail(data);
      });
  }, []);

  const { name, _id, img } = detail;

  return (
    // THis is the main section of the page
    <div className="py-5 my-5">
      <Container>
        <h3 className="text-center text-secondary mb-5 ">
          Order Placement Page . Confirm Your Order By follow red color text
        </h3>
        <h5 className="text-center text-danger mt-5 mb-5">
          Please copy Product Name, Product Id, Product Image URL perfectly to
          ensure you are aware of your order placement{' '}
        </h5>

        {/* This is the form to collect data */}
        <div className="add-service d-flex">
          <Col md={7} className="gap-0 pb-5 mb-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register('name')} value={user?.displayName} />
              <input {...register('email')} value={user?.email} />
              <input
                {...register('productName')}
                placeholder="Please Copy the Product Name and Past Here"
              />
              <input
                {...register('_id')}
                placeholder="Please Copy the Product Id and Past Here"
              />
              <input
                {...register('img')}
                placeholder="Please Copy the Product Image URL Past Here"
              />

              <input type="submit" />
            </form>
          </Col>
          {/* This will the some data  */}
          <Col md={4}>
            <h5>Product Name: {name}</h5>
            <br />
            <h5>Product Id: {_id}</h5>
            <br />
            <h5>Product img URL:</h5>
            <h5>{img}</h5>
            {isLoading && (
              <div class="text-center">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </Col>
        </div>
      </Container>
    </div>
  );
};
export default PlaceOrder;
// This is end of the code
