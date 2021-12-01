// This for important file.
import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddReview.css';

// This is for Add review Page
const AddReview = () => {
  // This is for using Form
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = data => {
    setIsLoading(true);
    console.log(data);
    // This is for posting data in the server databaser
    axios
      .post('https://radiant-refuge-98661.herokuapp.com/reviews', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Successfully Added New Review in the Mongodb Server');
          setIsLoading(false);
          reset();
        }
      });
  };
  return (
    // THis is for add New review file. That containt form and input and button
    <div className="py-5 mb-5">
      <Container className="pb-5 mb-5">
        <h3 className="text-center text-success mt-5 mb-3">
          Please Add New Review for your website
        </h3>

        <div className="add-service">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('userName', { required: true, maxLength: 20 })}
              placeholder="Name(Please Ensure maxLength 20 Char)"
            />
            <input
              type="number"
              {...register('rating', { required: true, min: 0, max: 5 })}
              placeholder="Rating (0-5)"
            />
            <input
              type="text"
              {...register('position', { required: true })}
              placeholder="Position"
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

export default AddReview;
// This is the end code of the page
