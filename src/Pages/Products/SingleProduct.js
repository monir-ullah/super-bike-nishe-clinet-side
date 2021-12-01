// THis is for import fle
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const SingleProduct = props => {
  // This is use for distructuring
  const { name, img, description, _id, price, star } = props.item;
  return (
    <>
      <div className="rounded-3">
        {/* This is slow single Offering */}
        <Col>
          <div>
            <Card className="shadow  border-0">
              <Card.Img variant="top" src={img} />

              <Card.Body>
                <hr />
                {/* This is Name */}
                <Card.Title>{name}</Card.Title>
                <h6>Price: ${price}</h6>
                <Card.Text>
                  {description}
                  <br />
                  <Rating
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning "
                  />
                </Card.Text>

                {/* This is use for dynamic button  */}
                <Link to={`/products/${_id}`}>
                  <Button variant="success" className="text-white">
                    Buy Now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </div>
    </>
  );
};

export default SingleProduct;
