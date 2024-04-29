import React from "react";
import data from "../../data.json";
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
      className="container"
      style={{
        backgroundColor: "white",
        borderRadius: ".25rem",
        boxShadow: "1rem .5rem .75rem hsl(0, 0%, 10%)",
        color: "hsl(0, 0%, 5%)",
        padding: "1rem 2rem ",
        translate: "-3rem 0",
      }}
    >
      <div className="top" style={{ display: "flex" }}>
        <p style={{ marginRight: "2rem" }}>CART ({cartCount})</p>
        <ClearCartButton />
      </div>

      <div className="item-display">
        {/* {cartItems} */}
        {/* <img src={item.image.mobile} alt={item.name} /> */}
        <div className="button" style={{ display: "flex" }}>
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
      </div>

      <div
        className="total"
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <div
          className="price"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p>total</p>
          <p>{data[0].price * cartCount}</p>
        </div>
        <div style={{ alignSelf: "center" }}>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
