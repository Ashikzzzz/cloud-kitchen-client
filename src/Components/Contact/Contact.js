import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="mt-5">
      <h1>Contact Us</h1>
      <div className=" d-flex justify-content-evenly align-items-center py-5">
        <div className=" p-5 bg-dark rounded">
          <h6 className="text-white fw-bold">We are open all the day</h6>
          <p className="text-white ">7:00 am - 9:00 pm</p>
        </div>
        <div className=" p-5  bg-dark rounded">
          <h6 className="text-white fw-bold">Have a question?</h6>
          <p className="text-white ">call :0000000000</p>
        </div>
        <div className="bg-dark p-5 rounded">
          <h6 className="fw-bold text-white">Want to visit? our address</h6>
          <p className="text-white">Dhaka Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
