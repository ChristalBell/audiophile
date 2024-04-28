import React from "react";
import data from "../../data.json";

import "./preview.css";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";
import CartItemCounter from "./CartItemCounter";
import ItemCounter from "../products/ItemCounter";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useState } from "react";
import { minusOne, addOne } from "../../store/itemCountSlice";
import {
  addToCartCount,
  lowerCartCount,
  raiseCartCount,
} from "../../store/cartCountSlice";
import { changeTotalCount } from "../../store/totalCountSlice";

const CartPreview = () => {
  const { cartCount } = useSelector((state) => state.cartCount);
  const { itemCount } = useSelector((state) => state.itemCount);
  const dispatch = useDispatch();

  // const [finalCount, setFinalCount] = useState(0);
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

        <Button
          onClick={() => {
            dispatch(lowerCartCount());
            dispatch(minusOne());
          }}
        >
          -
        </Button>
        <p>{cartCount}</p>
        <Button
          onClick={() => {
            dispatch(raiseCartCount());
            dispatch(addOne());
          }}
        >
          +
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <p>total</p>
        <p>{data[0].price * cartCount}</p>
      </div>
      <div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartPreview;
