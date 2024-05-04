import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { raiseItemCount } from "../../store/itemCountSlice";
import { startCartItems, addCartItems } from "../../store/cartItemSlice";
import { Addchart } from "@mui/icons-material";

const AddToCartButton = ({ count, setCount, item, cartItemCount }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);
  // console.log(cartItems);
  // console.log(item.image.mobile);
  console.log(item);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          dispatch(startCartItems());
          dispatch(addCartItems(item));
          dispatch(raiseItemCount(count));
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

// onClick={() => {
//   if (cartItems[0].cartItemCount === 0) {
//     dispatch(<p>no items in cart!</p>);
//   } else if (dispatch(addCartItems(item, cartItemCount)));
//   dispatch(raiseItemCount(count));
// }}

export default AddToCartButton;
