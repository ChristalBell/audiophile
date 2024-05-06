import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { raiseItemCount } from "../../store/itemCountSlice";
import {
  startCartItems,
  addCartItems,
  raiseCountCartItems,
} from "../../store/cartItemSlice";
import { raiseTotalPrice } from "../../store/totalPriceSlice";

const AddToCartButton = ({ count, setCount, item }) => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.itemCount);
  const { cartItems } = useSelector((state) => state.cartItems);
  // const { cartItemCount } = useSelector((state) => state.cartItemCount);
  console.log(item);
  console.log(item.name);
  console.log(count);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          addCartItems(item);
          raiseCountCartItems(count);
          // if (cartItems.item === undefined) {
          //   startCartItems();
          // } else {
          //   dispatch(startCartItems());
          //   dispatch(addCartItems(item));
          //   dispatch(raiseTotalPrice(count * item.price));
          //   dispatch(raiseItemCount(count));
          // }
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
