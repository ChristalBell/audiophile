import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { raiseItemCount } from "../../store/itemCountSlice";

const AddToCartButton = ({ count, setCount }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(raiseItemCount(count))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
