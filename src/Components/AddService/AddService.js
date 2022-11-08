import React from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const handleSubmitOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const picture = form.picture.value;
    const messege = form.messege.value;

    const order = {
      name: name,
      price: price,
      picture: picture,
      messege: messege,
    };
    console.log(order);

    fetch("http://localhost:5000/servicesall", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    toast.success("Your service is Added");
    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmitOrder} className="w-50 mx-auto">
        <Form.Label htmlFor="inputPassword5">Product Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5"> Expected price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">Product Picture</Form.Label>
        <Form.Control
          type="text"
          name="picture"
          aria-describedby="passwordHelpBlock"
        />
        <FloatingLabel
          className="mt-4"
          controlId="floatingTextarea2"
          label="Product Description"
        >
          <Form.Control
            as="textarea"
            name="messege"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <input
          className="btn btn-dark mt-3"
          type="submit"
          value="Add to Service"
        />
        <ToastContainer />
      </Form>
    </div>
  );
};

export default AddService;
