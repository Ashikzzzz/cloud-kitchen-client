import React from "react";
import t1 from "../../assets/image/t1.jpg";
import t2 from "../../assets/image/t2.jpeg";
import t3 from "../../assets/image/t3.jpeg";
import "./Tranding.css";

const Trending = () => {
  return (
    <div className="">
      <h1 className="my-3">Trending foods</h1>
      <div className="trending">
        <div>
          <img className="rounded" src={t1} alt="" />
          <h3>Wadges</h3>
        </div>
        <div>
          <img className="rounded" src={t2} alt="" />
          <h3>Biriyani</h3>
        </div>
        <div>
          <img className="rounded" src={t3} alt="" />
          <h3>Halim</h3>
        </div>
      </div>
    </div>
  );
};

export default Trending;
