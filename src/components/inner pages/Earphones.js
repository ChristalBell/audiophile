import React from "react";
import Products from "./Products";
import data from "../../data.json";
import GoBackButton from "../GoBackButton";
import ShopCards from "../ShopCards";
import Ad from "../Ad";

const Earphones = () => {
  return (
    <div>
      <GoBackButton />
      <div>
        <Products
          image={data[5].image[0].mobile}
          type={data[5].type}
          title={data[5].title}
          description={data[5].description}
        />
      </div>
      <ShopCards />
      <Ad />
    </div>
  );
};

export default Earphones;
