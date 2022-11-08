import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Review = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.name.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const messege = form.messege.value;

    const review = {
      name: text,
      image: image,
      rating: rating,
      messege: messege,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    form.reset();
  };

  return (
    <div>
      <h1 className="mt-2">Add Your Experience</h1>
      <Form onSubmit={handleReview} className="w-50 mx-auto mt-5">
        <Form.Label htmlFor="inputPassword5">Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Your Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Rating Your experience</Form.Label>
        <Form.Control
          type="text"
          name="rating"
          aria-describedby="passwordHelpBlock"
        />
        <FloatingLabel
          className="mt-4"
          controlId="floatingTextarea2"
          label="Write your review"
        >
          <Form.Control
            as="textarea"
            name="messege"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <input className="btn btn-dark mt-3" type="submit" value="Submit" />
        <Link to="/allreview">
          {" "}
          <input
            className="btn btn-dark mt-3"
            type="submit"
            value="See Review"
          />
        </Link>
      </Form>
    </div>
  );
};

export default Review;
