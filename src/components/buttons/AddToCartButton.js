import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCartCount, raiseCartCount } from "../../store/cartCountSlice";

const AddToCartButton = () => {
  const dispatch = useDispatch();
  // const { cartItems } = useSelector((state) => state.cartItems);
  const { cartCount } = useSelector((state) => state.cartCount);
  const { raiseCartCount } = useSelector((state) => state.cartCount);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          // dispatch(addToCartCount(cartItems));
          dispatch(raiseCartCount());
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
