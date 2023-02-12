import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  useTitle("register");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const currentUser = {
      email,
      password,
    };
    // console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // get jwt token
        fetch(" https://cloud-kitchen-server-seven.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("cloud-token", data.token);
            navigate("/");
          });

        form.reset();
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="login-form w-50 mx-auto p-4 rounded login-form">
      <h1>Please create an account</h1>
      <Form onSubmit={handleRegister} className="w-50 mx-auto mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
