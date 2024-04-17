import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { minus } from "../../store/cartCount";
import { add } from "../../store/cartCount";

const Counter = () => {
  const { count } = useSelector((state) => state.cartCount);
  const dispatch = useDispatch();

  if ({ count } >= 0) {
    return (
      <div style={{ display: "flex" }}>
        <Button
          onClick={() => {
            dispatch(minus());
          }}
        >
          -
        </Button>
        <p>{count}</p>
        <Button
          onClick={() => {
            dispatch(add());
          }}
        >
          +
        </Button>
      </div>
    );
  }
};

export default Counter;
