import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Review from "../Review/Review";

const ServiceDetail = () => {
  useTitle("service-detail");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();

  return (
    <div>
      {user?.email || user?.uid ? (
        <Container>
          <Row>
            <Col lg="4">
              <Card className="mt-3" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={service.picture} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Title>Price:${service.price}</Card.Title>
                  <Card.Text>{service.about}</Card.Text>
                  <Card.Title>Rating:${service.rating}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="8">
              <Review></Review>
            </Col>
          </Row>
        </Container>
      ) : (
        <h2>
          you need to <Link to="/login">login</Link> in first
        </h2>
      )}
    </div>
  );
};

export default ServiceDetail;
