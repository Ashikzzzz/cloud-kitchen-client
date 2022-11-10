import React, { useContext } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Review = () => {
  useTitle("review");
  const serviceData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.name.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const messege = form.messege.value;
    const date = new Date();
    const review = {
      name: text,
      image: image,
      rating: rating,
      messege: messege,
      email: user?.email,
      date,
    };

    fetch(" https://cloud-kitchen-server-seven.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    form.reset();
    navigate("/allreview");
  };

  return (
    <div>
      <h1 className="mt-2">Add Your Experience</h1>
      <h3>Item name is {serviceData.name}</h3>
      <Form onSubmit={handleReview} className="w-50 mx-auto mt-5">
        <Form.Label htmlFor="inputPassword5">Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          defaultValue={user?.displayName}
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Your Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          defaultValue={user?.email}
          readOnly
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Your Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          defaultValue={user?.photoURL}
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
      </Form>
    </div>
  );
};

export default Review;
