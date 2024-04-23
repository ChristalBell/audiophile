import React from "react";
import data from "../../data.json";

import "./preview.css";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";
import CartItemCounter from "./CartItemCounter";
import { useSelector } from "react-redux";

const CartPreview = ({ item }) => {
  const { cartCount } = useSelector((state) => state.cartCount);
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
        <p>
          {data[0].price} * {cartCount}
        </p>
      </div>
      <div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartPreview;
