import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./AllServices.css";

const AllServices = () => {
  useTitle("allService");
  const [allService, setAllservice] = useState([]);
  useEffect(() => {
    fetch(" https://cloud-kitchen-server-seven.vercel.app/servicesall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllservice(data);
      });
  }, []);

  return (
    <div>
      <h1>All Servicees </h1>
      <Container>
        <div className="allService-C">
          {allService.map((service) => {
            return (
              <Card style={{ width: "18rem" }}>
                <PhotoProvider>
                  <PhotoView src={service.picture} alt="">
                    <Card.Img variant="top" src={service.picture} alt="" />
                  </PhotoView>
                </PhotoProvider>
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Title>Price: ${service.price}</Card.Title>
                  <Card.Title>Rating:{service.rating}</Card.Title>
                  <Card.Text>{service?.about?.slice(0, 80) + "..."}</Card.Text>
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
