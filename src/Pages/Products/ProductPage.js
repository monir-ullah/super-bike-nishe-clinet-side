// Import file
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';

// This apge will the product
const ProductPage = () => {
  // This is use for updating data
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    // This useEffect Use for taking data from fake DB
    fetch('https://radiant-refuge-98661.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="pb-5 mb-5">
      <div className="p-5 my-5">
        <h3 className="text-center fw-bold display-5 mb-5 pt-2">
          Our Awesome<span className="text-success">Product Listed</span>
        </h3>
        {isLoading && (
          <div class="text-center">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!isLoading && (
          <Container>
            <Row xs={1} md={3} className="g-4">
              {products.map(item => (
                <SingleProduct item={item} key={item._id}></SingleProduct>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
