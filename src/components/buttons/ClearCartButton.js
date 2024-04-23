import React from "react";
import { Button } from "@mui/material";
import { clearCartCount } from "../../store/cartCountSlice";
import { useDispatch } from "react-redux";

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
        }}
      >
        Remove All
      </Button>
    </div>
  );
};

export default ClearCartButton;
