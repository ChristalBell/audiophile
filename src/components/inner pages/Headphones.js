import React from "react";
import Products from "./Products";
import data from "../../data.json";
import GoBackButton from "../GoBackButton";
import ShopCards from "../ShopCards";
import Ad from "../Ad";

const Headphones = () => {
  return (
    <div>
      <GoBackButton />
      <div>
        <Products
          image={data[0].image[0].mobile}
          type={data[0].type}
          title={data[0].title}
          description={data[0].description}
        />

        <Products
          image={data[1].image[0].mobile}
          type={data[1].type}
          title={data[1].title}
          description={data[1].description}
        />

        <Products
          image={data[2].image[0].mobile}
          type={data[2].type}
          title={data[2].title}
          description={data[2].description}
        />
      </div>
      <ShopCards />
      <Ad />
    </div>
  );
};

export default Headphones;
