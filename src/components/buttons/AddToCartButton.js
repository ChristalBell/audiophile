import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItems,
  raiseCountCartItems,
  startCartItems,
} from "../../store/cartItemSlice";

const AddToCartButton = ({ count, setCount, item }) => {
  const dispatch = useDispatch();

  // console.log(item);

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          dispatch(addCartItems(item));
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
