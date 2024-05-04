import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearItemCount } from "../../store/itemCountSlice";
import { clearTotalPrice } from "../../store/totalPriceSlice";

const ClearCartButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ textTransform: "uppercase" }}
        onClick={() => {
          dispatch(clearItemCount());
          dispatch(clearTotalPrice());
        }}
      >
        Remove All
      </Button>
    </div>
  );
};

export default ClearCartButton;
