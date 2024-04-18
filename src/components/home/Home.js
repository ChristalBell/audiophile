import React from "react";
import Hero from "./Hero";
import CategoryContainer from "../products/CategoryContainer";
import DirectProductCard from "../cards/DirectProductCard";
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
