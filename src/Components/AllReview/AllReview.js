import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useTitle from "../../hooks/useTitle";
import "./AllReview.css";

const AllReview = () => {
  useTitle("allReview");
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="review-G mt-5">
      {reviews.map((review) => {
        return (
          <Container>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Image className="I-card" src={review.image} alt=""></Image>
                <Card.Title>{review.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {review.messege}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {review.rating}
                </Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div>
  );
};

export default AllReview;
