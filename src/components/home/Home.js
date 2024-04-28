import React from "react";
import Hero from "./Hero";
import CategoryGroup from "../category/CategoryGroup";
import DirectProductCard from "../products/DirectProductCard";
import Ad from "../shared/Ad";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryGroup />
      <DirectProductCard />
      <Ad />
    </div>
  );
};

export default Home;
