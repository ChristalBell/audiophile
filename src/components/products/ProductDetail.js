import React from "react";
import data from "../../data.json";
import Counter from "./Counter";
import AddToCartButton from "../buttons/AddToCartButton";

const ProductDetail = (props) => {
  const itemName = props.match.params.name;
  let item = {};

  data.map((product) => {
    if (product.slug === itemName) {
      item = product;
    }
    return product;
  });
  return (
    <div>
      <div className="top" style={{ display: "flex" }}>
        <div className="product-image">
          <img src={item.image.mobile} alt={item.name} />
        </div>

        <div className="product-info">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <h5>${item.price}</h5>

          <div
            className="product-counter"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Counter />
            <AddToCartButton />
          </div>
        </div>
      </div>

      <div className="bottom" style={{ display: "flex" }}>
        <div className="features">
          <h2>Features</h2>
          <p>{item.features}</p>{" "}
        </div>

        <div className="in-box">
          <h2>In The Box</h2>
        </div>
      </div>

      {/* <>Gallery Component </>
      <>You May Also Like  (recommended) component</>
      <> category Card component </>
      <> ad component </> */}
    </div>
  );
};

export default ProductDetail;
