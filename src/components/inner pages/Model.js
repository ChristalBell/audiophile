import React from "react";
import data from "../../data.json";
import DirectProductCard from "../cards/DirectProductCard";
import CategoryCard from "../cards/CategoryCard";
import Ad from "../shared/Ad";

// image, type, title, description, price, features, box, link
const Model = () => {
  return (
    <div>
      <p>hello world</p>
      {/* <Route exact path="/headphones">
              <Headphones />
            </Route> */}
      {/* <>
        <img
          src={image}
          alt={type}
          style={{ borderRadius: ".25rem", height: "24rem", width: "24rem" }}
        />
      </>

      <>
        <h1>{title}</h1>
        <p>{description}</p>
        <h5>{price}</h5>
        Add to Cart Component
      </>

      <>
        <h2>Features</h2>
        <p>{features}</p>{" "}
      </>

      <>
        <h2>In The Box</h2>
        {box}
      </>

      <>Gallery Component </>

      <>
        <h2>You May Also Like</h2>
        <DirectProductCard />
        <CategoryCard />
        <Ad />
      </> */}
    </div>
  );
};

export default Model;
