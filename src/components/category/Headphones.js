import React from "react";
import CategoryHome from "./CategoryHome";
import ProductDetail from "../products/ProductDetail";

const Headphones = () => {
  return (
    <div>
      <ProductDetail />

      {/* <div>
        <ProductDetail
          image={data[0].image[0].mobile}
          type={data[0].type}
          title={data[0].title}
          description={data[0].description}
        />

        <ProductDetail
          image={data[1].image[0].mobile}
          type={data[1].type}
          title={data[1].title}
          description={data[1].description}
        />

        <ProductDetail
          image={data[2].image[0].mobile}
          type={data[2].type}
          title={data[2].title}
          description={data[2].description}
        />
      </div> */}
    </div>
  );
};

export default Headphones;
