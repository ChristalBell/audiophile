import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Counter = ({ count, setCount, item }) => {
  // const { cartItemCount } = useSelector((state) => state.cartItemCount);
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
