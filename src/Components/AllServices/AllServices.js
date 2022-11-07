import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AllServices.css";

const AllServices = () => {
  const [allService, setAllservice] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicesall")
      .then((res) => res.json())
      .then((data) => setAllservice(data));
  }, []);

  return (
    <div>
      <h1>All Servicees </h1>
      <Container>
        <div className="allService-C">
          {allService.map((service) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={service.picture} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Title>Price: ${service.price}</Card.Title>
                  <Card.Title>Rating:{service.rating}</Card.Title>
                  <Card.Text>{service.about.slice(0, 80) + "..."}</Card.Text>
                  <Link to={`/servicedetail/${service._id}`}>
                    {" "}
                    <Button variant="primary">View Detail</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default AllServices;
