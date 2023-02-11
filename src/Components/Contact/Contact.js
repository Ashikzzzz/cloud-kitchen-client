import React from "react";

const Contact = () => {
  return (
    <div className="mt-5">
      <h1>Contact Us</h1>
      <div className=" d-flex justify-content-evenly align-items-center py-5">
        <div className=" p-5 ">
          <h6 className="text-black fw-bold">We are open all the day</h6>
          <p className="text-black ">7:00 am - 9:00 pm</p>
        </div>
        <div className=" p-5 ">
          <h6 className="text-black fw-bold">Have a question?</h6>
          <p className="text-black ">call :0000000000</p>
        </div>
        <div>
          <h6 className="fw-bold">Want to visit? our address</h6>
          <p>Dhaka Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
