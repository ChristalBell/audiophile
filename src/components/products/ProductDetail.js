import React from "react";
import data from "../../data.json";
import GoBackButton from "../buttons/GoBackButton";
import ItemCounter from "./ItemCounter";
import AddToCartButton from "../buttons/AddToCartButton";
import CategoryGroup from "../category/CategoryGroup";
import Ad from "../shared/Ad";
import ProductGallery from "./ProductGallery";
import ProductRecommendation from "./ProductRecommendation";

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
      <GoBackButton />

      <div
        className="top"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="product-image">
          <img
            src={item.image.mobile}
            alt={item.name}
            style={{ borderRadius: ".5rem", height: "60vh", width: "90vw" }}
          />
        </div>
        <div
          className="product-info"
          style={{ textAlign: "center", padding: "0 2rem" }}
        >
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <h3>${item.price}</h3>
          <div
            className="product-counter"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: "2.5rem",
            }}
          >
            <ItemCounter />
            <AddToCartButton />
          </div>
          <div className="features">
            <h2>Features</h2>
            <p style={{ lineHeight: "1.5rem" }}>{item.features}</p>{" "}
          </div>
          <div className="in-box">
            <h2>In The Box</h2>
            <ul style={{ listStyle: "none" }}>
              {item.includes.map((accessory) => {
                return (
                  <li style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "hsl(24, 66%, 55%)",
                        fontWeight: "bold",
                        padding: "0 1rem",
                        marginLeft: "1.5rem",
                      }}
                    >
                      {accessory.quantity} x
                    </span>
                    {accessory.item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom">
        <ProductGallery />
        <ProductRecommendation />
        <CategoryGroup />
        <Ad />
      </div>
    </div>
  );
};

export default ProductDetail;
