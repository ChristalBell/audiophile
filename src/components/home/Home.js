import React from "react";
import Hero from "./Hero";
import CategoryCard from "../cards/CategoryCard";
import DirectProductCard from "../cards/DirectProductCard";
import Ad from "../shared/Ad";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <DirectProductCard />
      <Ad />
    </div>
  );
};

export default Home;
