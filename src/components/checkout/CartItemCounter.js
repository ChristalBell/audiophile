import { Button } from "@mui/material";
import React from "react";
import { lowerCartCount, raiseCartCount } from "../../store/cartCountSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItemCounter = () => {
  const dispatch = useDispatch();
  const { cartCount } = useSelector((state) => state.cartCount);
  return (
    <div
      style={{
        borderRadius: ".25rem",
        backgroundColor: "hsl(0,0%,94%) ",
        display: "flex",
      }}
    >
      <Button
        onClick={() => {
          dispatch(lowerCartCount());
        }}
      >
        -
      </Button>

      <p>{cartCount} </p>

      <Button
        onClick={() => {
          dispatch(raiseCartCount());
        }}
      >
        +
      </Button>
    </div>
  );
};

export default CartItemCounter;
