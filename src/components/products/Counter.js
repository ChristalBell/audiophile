import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, minus } from "../../store/itemCountSlice";

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
          dispatch(minus());
        }}
      >
        -
      </Button>
      <p>{itemCount}</p>
      <Button
        onClick={() => {
          dispatch(add());
        }}
      >
        +
      </Button>
    </div>
  );
};
export default Counter;
