import React from "react";
import Hero from "./Hero";
import ShopCards from "./ShopCards";
import ProductCards from "./ProductCards";
import Ad from "./Ad";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCards />
      <ProductCards />
      <Ad />
    </div>
  );
};

export default Home;
