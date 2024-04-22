import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCartCount } from "../../store/cartCountSlice";

const AddToCartButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(addCartCount())}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
