import React from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { price, picture, rating, name, about, _id } = service;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "24rem" }}>
              <PhotoProvider>
                <PhotoView>
                  <Card.Img variant="top" src={picture} />
                </PhotoView>
              </PhotoProvider>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>Price: ${price}</Card.Title>
                <Card.Text>{about.slice(0, 80) + "..."}</Card.Text>
                <Card.Text>Rating:{rating}</Card.Text>
                <Link to={`/servicedetail/${_id}`}>
                  {" "}
                  <Button variant="primary">View Detail</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
