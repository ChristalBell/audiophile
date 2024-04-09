import React from "react";
import data from "../../data.json";
import ProductCards from "../ProductCards";
import ShopCards from "../ShopCards";
import Ad from "../Ad";

const Model = (image, type, title, description, price, features, box, link) => {
  return (
    <div>
      <h1>Hello world</h1>
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
        <ProductCards />
        <ShopCards />
        <Ad />
      </> */}
    </div>
  );
};

export default Model;
