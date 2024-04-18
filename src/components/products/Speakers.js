import React from "react";
import Products from "./Products";
import data from "../../data.json";
import CategoryContainer from "./CategoryContainer";
import GoBackButton from "../shared/GoBackButton";
import Ad from "../shared/Ad";

const Speakers = () => {
  return (
    <div>
      <GoBackButton />
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
      <CategoryContainer />
      <Ad />
    </div>
  );
};

export default Speakers;
