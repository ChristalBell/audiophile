import React from "react";
import data from "../../data.json";
import Counter from "./Counter";

const ProductDetail = () => {
  return (
    <div>
      <div className="top">
        <div className="product-image">
          <img
            src={data[0].image.mobile}
            alt={data[0].name}
            style={{ borderRadius: ".25rem", height: "24rem", width: "24rem" }}
          />
        </div>

        <div className="product-info">
          <h1>{data[0].name}</h1>
          <p>{data[0].description}</p>
          <h5>${data[0].price}</h5>
        </div>
        <div className="product-counter">
          <Counter />
          {/* <AddToCartButton /> */}
        </div>
      </div>

      <div className="bottom">
        <div className="features">
          <h2>Features</h2>
          <p>{data[0].features}</p>{" "}
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
