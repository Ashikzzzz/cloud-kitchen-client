import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Trending></Trending>
      <Contact></Contact>
    </div>
  );
};

export default Home;
