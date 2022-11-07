import React from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Service.css";

const Service = ({ service }) => {
  const { price, picture, rating, name, about } = service;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>Price: ${price}</Card.Title>
                <Card.Text>{about.slice(0, 80) + "..."}</Card.Text>
                <Card.Text>Rating:{rating}</Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
