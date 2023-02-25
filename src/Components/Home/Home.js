import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Trending from "../Trending/Trending";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      <Banner></Banner>
      <Services></Services>
      <Trending></Trending>
      <Contact></Contact>
    </div>
  );
};

export default Home;
