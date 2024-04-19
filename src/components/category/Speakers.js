import React from "react";
import Products from "./CategoryHome";
import data from "../../data.json";
import CategoryContainer from "./CategoryContainer";
import GoBackButton from "../buttons/GoBackButton";
import Ad from "../shared/Ad";

const Speakers = () => {
  return (
    <div>
      <div>
        <Products
          image={data[3].image[0].mobile}
          type={data[3].type}
          title={data[3].title}
          description={data[3].description}
        />

        <Products
          image={data[4].image[0].mobile}
          type={data[4].type}
          title={data[4].title}
          description={data[4].description}
        />
      </div>
    </div>
  );
};

export default Speakers;
