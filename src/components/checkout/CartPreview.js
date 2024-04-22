import { Typography } from "@mui/material";
import React from "react";
import Counter from "../products/Counter";
import "./preview.css";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";

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
        <Counter />
      </div>

      <div style={{ fontWeight: "bold", textTransform: "uppercase" }}>
        <p>total</p>
        <p> $total price.00</p>
      </div>
      <CheckoutButton />
    </div>
  );
};

export default CartPreview;
