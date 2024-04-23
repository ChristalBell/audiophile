import React from "react";

import "./preview.css";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";
import CartItemCounter from "./CartItemCounter";

const CartPreview = ({ item }) => {
  return (
    <div
      className="invisible"
      style={{
        backgroundColor: "white",
        borderRadius: ".25rem",
        color: "black",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "2rem" }}>CART ()</p>
        <ClearCartButton />
      </div>

      <div style={{ display: "flex" }}>
        {/* <img src={item.image.mobile} alt={item.name} /> */}
        <p>item name</p>
        <CartItemCounter />
      </div>

      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <p>total</p>
        <p> $total price.00</p>
      </div>
      <div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartPreview;
