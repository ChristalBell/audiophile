import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { raiseCountCartItems } from "../../store/cartItemSlice";

const Counter = ({ count, setCount, item }) => {
  // const { cartItemCount } = useSelector((state) => state.cartItemCount);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={(item) => {
          setCount(count - 1);
        }}
      >
        -
      </Button>
      <p
        style={{
          margin: "1rem",
        }}
      >
        {count}
      </p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
