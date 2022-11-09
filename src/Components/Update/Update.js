import React, { useContext } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";

const Update = () => {
  const updateData = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleUpdate = (event) => {
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
      email: user?.email,
    };

    fetch(`http://localhost:5000/reviewsemail/${updateData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("data updated");
        }
        navigate("/myreview");
      });
  };

  return (
    <div>
      <h1>Please Update</h1>
      <Form onSubmit={handleUpdate} className="w-50 mx-auto mt-5">
        <Form.Label htmlFor="inputPassword5">Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          defaultValue={updateData?.name}
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Your Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          defaultValue={updateData?.email}
          readOnly
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Your Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          defaultValue={updateData?.image}
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Rating Your experience</Form.Label>
        <Form.Control
          type="text"
          name="rating"
          defaultValue={updateData?.rating}
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
            defaultValue={updateData?.messege}
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <input className="btn btn-dark mt-3" type="submit" value="Submit" />
        <ToastContainer></ToastContainer>
      </Form>
    </div>
  );
};

export default Update;
