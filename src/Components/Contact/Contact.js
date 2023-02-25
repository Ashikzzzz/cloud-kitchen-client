import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="mt-5 ">
      <h1>Contact Us</h1>
      <div className="">
        <div className=" review-G py-5">
          <div className=" p-5  rounded">
            <h6 className="text-dark fw-bold">We are open all the day</h6>
            <p className="text-dark ">7:00 am - 9:00 pm</p>
          </div>
          <div className=" p-5  rounded">
            <h6 className="text-dark fw-bold">Have a question?</h6>
            <p className="text-dark ">call :0000000000</p>
          </div>
          <div className="p-5 rounded">
            <h6 className="fw-bold text-dark">Want to visit? our address</h6>
            <p className="text-dark">Dhaka Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
