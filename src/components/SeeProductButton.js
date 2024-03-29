import { Button } from "@mui/material";
import React from "react";

const SeeProductButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "0.1rem", fontWeight: 600 }}
      >
        See Product
      </Button>
    </div>
  );
};

export default SeeProductButton;
