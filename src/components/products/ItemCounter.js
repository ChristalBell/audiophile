import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, addOne } from "../../store/itemCountSlice";

const Counter = () => {
  const { itemCount } = useSelector((state) => state.itemCount);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: "hsl(0, 0%, 94%)",
        borderRadius: ".25rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </Button>
      <p>{itemCount}</p>
      <Button
        onClick={() => {
          dispatch(addOne());
        }}
      >
        +
      </Button>
    </div>
  );
};
export default Counter;
