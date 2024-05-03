import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { raiseItemCount } from "../../store/itemCountSlice";
import { startCartItems, addCartItems } from "../../store/cartItemSlice";

const AddToCartButton = ({ count, setCount, item }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          if (cartItems === undefined) {
            dispatch(startCartItems(item));
          } else if (cartItems[0] === "") {
            dispatch(startCartItems(item));
          }
          dispatch(raiseItemCount(count));
          dispatch(addCartItems(item));
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
