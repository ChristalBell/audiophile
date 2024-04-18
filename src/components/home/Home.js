import React from "react";
import Hero from "./Hero";
import CategoryContainer from "../category/CategoryContainer";
import DirectProductCard from "../products/DirectProductCard";
import Ad from "../shared/Ad";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryContainer />
      <DirectProductCard />
      <Ad />
    </div>
  );
};

export default Home;
