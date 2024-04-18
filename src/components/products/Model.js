import React from "react";
import data from "../../data.json";
import DirectProductCard from "../cards/DirectProductCard";
import CategoryContainer from "./CategoryContainer";
import Ad from "../shared/Ad";
import Counter from "./Counter";

// image, type, title, description, price, features, box, link
const Model = () => {
  return (
    <div>
      {/* <Route exact path="/headphones">
              <Headphones />
            </Route> */}
      <>
        <img
          src={data[5].image}
          alt={data[5].type}
          style={{ borderRadius: ".25rem", height: "24rem", width: "24rem" }}
        />
      </>

      <>
        <h1>{data[5].title}</h1>
        <p>{data[5].description}</p>
        <h5>${data[5].price}</h5>
        Add to Cart Component
        <Counter />
      </>

      <>
        <h2>Features</h2>
        <p>{data[5].features}</p>{" "}
      </>

      <>
        <h2>In The Box</h2>
        {data[5]["in the box"]}
      </>

      <>Gallery Component </>

      <>
        <h2>You May Also Like</h2>
        <DirectProductCard />
        <CategoryContainer />
        <Ad />
      </>
    </div>
  );
};

export default Model;
