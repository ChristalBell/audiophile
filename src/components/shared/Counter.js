import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOne, minusOne } from "../../store/itemCountSlice";
import { lowerTotalPrice, raiseTotalPrice } from "../../store/totalPriceSlice";
import {
  addCartItems,
  lowerCountCartItems,
  raiseCountCartItems,
  removeCartItems,
  startCartItems,
} from "../../store/cartItemSlice";

const Counter = ({ count, setCount, item }) => {
  // const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  console.log(item);
  console.log(item.price);
  return (
    <div style={{ display: "flex" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={(item) => {
          setCount(count - 1);
          dispatch(lowerCountCartItems(count));
          dispatch(removeCartItems(item, count));
        }}
        // onClick={() => {
        //   if (cartItems[itemIndex].length === 1) {
        //     dispatch(minusOne());
        //     dispatch(lowerTotalPrice());
        //     dispatch(removeCartItems(cartItems[itemIndex].item));
        //     dispatch(lowerCountCartItems(cartItems[0].cartItemCount));
        //     setCount(count - 1);
        //   } else {
        //     setCount(count - 1);
        //   }
        // }}
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
          dispatch(startCartItems(item));
          dispatch(raiseCountCartItems(count));
        }}

        // onClick={() => {
        //   if (cartItems[itemIndex].length === 1) {
        //     dispatch(addOne());
        //     dispatch(raiseTotalPrice());
        //     dispatch(addCartItems(cartItems[itemIndex]));
        //     dispatch(raiseCountCartItems(cartItems[itemIndex]));
        //     setCount(count + 1);
        //   } else {
        //     setCount(count + 1);
        //   }
        // }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
