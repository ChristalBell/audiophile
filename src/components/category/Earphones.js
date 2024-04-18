import React from "react";
import Products from "../products/Products";
import data from "../../data.json";
import CategoryContainer from "./CategoryContainer";
import Ad from "../shared/Ad";
import { Link } from "react-router-dom";
import Model from "../products/Model";
import DirectLinkButton from "../buttons/DirectLinkButton";

const Earphones = () => {
  return (
    <div>
      <div>
        <Products
          image={data.image.mobile}
          type={data.category}
          title={data.name}
          description={data.description}
        />
        {/* {data[5].slug} */}
        <Link to="earphones/yx1wirelessearphones">
          <DirectLinkButton />
        </Link>
      </div>
      <CategoryContainer />
      <Ad />
    </div>
  );
};

export default Earphones;
