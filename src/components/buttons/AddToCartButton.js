import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { raiseItemCount } from "../../store/itemCountSlice";
import { startCartItems, addCartItems } from "../../store/cartItemSlice";

const AddToCartButton = ({ count, setCount, item, cartItemCount }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);
  console.log(cartItems);
  console.log(item.image.mobile);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          // if (cartItems[0].name === "") {
          //   dispatch(startCartItems());
          // }
          dispatch(raiseItemCount(count));
          dispatch(addCartItems(item, cartItemCount));
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
