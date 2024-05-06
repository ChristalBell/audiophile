import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearItemCount } from "../../store/itemCountSlice";
import { clearTotalPrice } from "../../store/totalPriceSlice";
import { clearCartItems } from "../../store/cartItemSlice";

const ClearCartButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ textTransform: "uppercase" }}
        onClick={() => {
          dispatch(clearCartItems());
        }}
      >
        Remove All
      </Button>
    </div>
  );
};

export default ClearCartButton;
