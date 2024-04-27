import React from "react";
import data from "../../data.json";

import "./preview.css";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";
import CartItemCounter from "./CartItemCounter";
import ItemCounter from "../products/ItemCounter";
import { useSelector } from "react-redux";

const CartPreview = () => {
  const { cartCount } = useSelector((state) => state.cartCount);
  const { itemCount } = useSelector((state) => state.itemCount);
  // const { cartItems } = useSelector((state) => state.cartItems);
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
        <p style={{ marginRight: "2rem" }}>CART ({cartCount})</p>
        <ClearCartButton />
      </div>

      <div style={{ display: "flex" }}>
        {/* {cartItems} */}
        {/* <img src={item.image.mobile} alt={item.name} /> */}

        <ItemCounter />
      </div>

      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <p>total</p>
        <p>{data[0].price * itemCount}</p>
      </div>
      <div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartPreview;
