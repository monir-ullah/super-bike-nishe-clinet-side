// Import file
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';

// This will show the all review
const Reviews = () => {
  const [getReviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://radiant-refuge-98661.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);
  return (
    // Main content
    <div>
      <div className="pb-4 ">
        <Container>
          <h3 className="text-center fw-bold display-5 mb-5 py-5 ">
            Our Awesome <span className="text-success">Testimonial</span>
          </h3>
          {isLoading && (
            <div class="text-center">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {!isLoading && (
            <Row xs={1} md={3} className="g-4">
              {getReviews.map(item => (
                <Review item={item} key={item._id}></Review>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Reviews;
// End of the codde
