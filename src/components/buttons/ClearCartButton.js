import React from "react";
import { Button } from "@mui/material";
import { clearCartCount } from "../../store/cartCountSlice";
import { useDispatch } from "react-redux";
import { clearItem } from "../../store/itemCountSlice";

const ClearCartButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ textTransform: "uppercase" }}
        onClick={() => {
          dispatch(clearCartCount());
          dispatch(clearItem());
        }}
      >
        Remove All
      </Button>
    </div>
  );
};

export default ClearCartButton;