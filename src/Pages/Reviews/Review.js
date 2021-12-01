// THis is for import fle
import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

// This is show single review in the revews page
const Review = props => {
  const { userName, img, rating, description, position } = props.item;
  return (
    //   This is the main section of the page
    <div className="pb-5 mb-5 ">
      <Col className="pb-3 mb-3">
        <div className="d-flex">
          <div className="w-25">
            <img src={img} className="border-img" width="70%" alt="" />
          </div>
          <div className="margin-name">
            <h5>{userName}</h5>
            <h6>{position}</h6>
          </div>
        </div>

        <p className="mt-2">{description}</p>
        <Rating
          initialRating={rating}
          readonly
          emptySymbol="far fa-star text-warning"
          fullSymbol="fas fa-star text-warning "
        />
      </Col>
    </div>
  );
};

export default Review;
// THis is end of the code
