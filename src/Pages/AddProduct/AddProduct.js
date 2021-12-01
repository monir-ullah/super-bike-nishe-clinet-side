// This is for important file
import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

// This is for add product page
const AddProduct = () => {
  // This is for user form . Here I added form.
  const { register, handleSubmit, reset } = useForm();
  // This is for Loading
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = data => {
    setIsLoading(true);
    console.log(data);
    // This is for post product in the server database.
    axios
      .post('https://radiant-refuge-98661.herokuapp.com/products', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Successfully Added New Product in the Mongodb Server');
          setIsLoading(false);
          reset();
        }
      });
  };
  return (
    <div className="py-5 mb-5">
      {/* This is for the main Form and Section */}
      <Container className="pb-5 mb-5">
        <h3 className="text-center text-success mt-5 mb-3">
          Please Add New Product for your website
        </h3>

        <div className="add-service">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('name', { required: true, maxLength: 34 })}
              placeholder="Name(Please Ensure maxLength 34 Char)"
            />
            <input
              type="number"
              {...register('price', { required: true })}
              placeholder="Price"
            />
            <input
              type="number"
              {...register('star', { required: true, min: 0, max: 5 })}
              placeholder="Rating (0-5)"
            />
            <textarea
              {...register('description', { required: true, maxLength: 702 })}
              placeholder="Please Add proper Description(Please Ensure maxLength 702 Char)"
            />
            <input {...register('img')} placeholder="Image URL" />
            <input type="submit" className="btn-success btn " />
          </form>
        </div>

        {isLoading && (
          <div class="text-center">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AddProduct;
