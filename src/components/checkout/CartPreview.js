import React from "react";
import data from "../../data.json";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { minusOne, addOne } from "../../store/itemCountSlice";

const CartPreview = () => {
  // const { cartCount } = useSelector((state) => state.cartCount);
  const { itemCount } = useSelector((state) => state.itemCount);
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

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
        <p style={{ marginRight: "2rem" }}>CART (Total Final Count)</p>
        <ClearCartButton />
      </div>

      <div className="item-display">
        <p>{cartItems}</p>
        <div className="counter-button" style={{ display: "flex" }}>
          <Button onClick={() => dispatch(minusOne())}>-</Button>
          <p>{itemCount}</p>
          <Button onClick={() => dispatch(addOne())}>+</Button>
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
          <p> count from Counter {itemCount}</p>
          {/* <p>{data[0].price * some count}</p> */}
        </div>
        <div style={{ alignSelf: "center" }}>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
