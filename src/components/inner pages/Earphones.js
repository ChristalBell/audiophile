import React from "react";
import Products from "./Products";
import data from "../../data.json";
import GoBackButton from "../GoBackButton";
import ShopCards from "../ShopCards";
import Ad from "../Ad";
import Model from "./Model";

const Earphones = () => {
  const earphoneModel = { link: "./yx1-wireless-earphones" };
  return (
    <div>
      <GoBackButton />
      <div>
        <Products
          image={data[5].image[0].mobile}
          type={data[5].type}
          title={data[5].title}
          description={data[5].description}
          link={earphoneModel.link}
        />
      </div>
      <ShopCards />
      <Ad />
    </div>
  );
};

export default Earphones;
