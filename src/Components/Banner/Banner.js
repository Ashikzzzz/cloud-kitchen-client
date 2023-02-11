import React from "react";
import { Container } from "react-bootstrap";
// import { Container } from "react-bootstrap";
import foodVideo from "../../assets/video/Food Delivery Animation After Effects Templates.mp4";
import "./Banner.css";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div>
      <div>
        <video className="banner-video" autoPlay loop muted>
          <source src={foodVideo} type="video/mp4"></source>
        </video>
        {/* <p className="mb-5 font-serif">
          <Typical
            loop={Infinity}
            steps={[
              "Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for  accommodations in specific locales Airbnb offers people an easy relatively stress-free way to earn some income from their  property",
              5000,
            ]}
          />
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
