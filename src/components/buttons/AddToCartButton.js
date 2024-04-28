import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  raiseCartCount,
  createCart,
  addToCartCount,
} from "../../store/cartCountSlice";

const AddToCartButton = () => {
  const dispatch = useDispatch();
  // const { cartCount } = useSelector((state) => state.cartCount);
  // const { cartItems } = useSelector((state) => state.cartItems);

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        // onClick={() => {
        //   if (cartItems === undefined) {
        //     dispatch(createCart(cartItems, cartCount));
        //   } else if (cartItems[0].cartItems.name === "") {
        //     dispatch(createCart(cartCount, cartItems));
        //   }
        //   dispatch(addToCartCount(cartCount, cartItems));

        //   dispatch(raiseCartCount());
        // }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
