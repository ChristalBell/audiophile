import React from "react";
import Products from "./Products";
import data from "../../data.json";
import GoBackButton from "../shared/GoBackButton";
import CategoryCard from "../cards/CategoryCard";
import Ad from "../shared/Ad";
import { Link } from "react-router-dom";
import Model from "./Model";
import DirectLinkButton from "../cards/DirectLinkButton";

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
        {/* {data[5].slug} */}
        <Link to="earphones/yx1wirelessearphones">
          <DirectLinkButton />
        </Link>
      </div>
      <CategoryCard />
      <Ad />
    </div>
  );
};

export default Earphones;
