import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(" https://cloud-kitchen-server-seven.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="mt-3">
        <h1>Our Services</h1>
      </div>
      <div className="card-G ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <Link to="allService">
        <Button className="btn btn-Dark">See All Service</Button>
      </Link>
    </div>
  );
};

export default Services;
