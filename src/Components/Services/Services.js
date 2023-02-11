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
    <div className="w-100 mx-auto ">
      <div className="my-2 w-25 mx-auto sm:w-100">
        <h1 className="fw-bold  text-center  text-black rounded-pill  py-2">
          Our Services
        </h1>
      </div>
      <div className="card-G  w-75 mx-auto">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="mt-3">
        <Link to="allService ">
          <Button className="btn btn-Dark">See All Service</Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
