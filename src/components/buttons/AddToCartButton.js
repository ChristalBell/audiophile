import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, raiseCountCartItems } from "../../store/cartItemSlice";

const AddToCartButton = ({ count, setCount, item }) => {
  const dispatch = useDispatch();

  console.log(item);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          dispatch(addCartItems(item));
          // dispatch(raiseCountCartItems(count));
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
