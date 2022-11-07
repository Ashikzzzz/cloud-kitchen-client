import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cl1 from "../../assets/image/cl1.png";
import cl2 from "../../assets/image/cl2.jpg";
import cl3 from "../../assets/image/cl3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={cl2} alt="First slide" />
          <Carousel.Caption>
            <h2 className="text-white">Are You Hungry</h2>
            <p className="text-white">Chack The WebSite And Order Now</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cl1} alt="Second slide" />
          <Carousel.Caption>
            <h2>
              Where does The Food Corridor fit in the cloud kitchen model?
            </h2>
            <p>
              There are increasing opportunities for food entrepreneurs either
              looking to start a virtual restaurant or start a commissary
              kitchen. Here at The Food Corridor, we know a bit about commercial
              kitchens and the food businesses that operate within them.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cl3} alt="Third slide" />
          <Carousel.Caption>
            <h2>What are the benefits to order from us?</h2>
            <p>
              Now we know the ins and outs of what constitutes a cloud kitchen,
              let’s take a look at the benefits compared to the traditional
              restaurant business model.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
