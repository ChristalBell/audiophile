import React from "react";
import Hero from "./Hero";
import CategoryCard from "./CategoryCard";
import DirectProductCard from "./DirectProductCard";
import Ad from "./Ad";

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
