import React from "react";
import { Button } from "@mui/material";

const PayButton = () => {
  return (
    <div className="button" style={{ margin: "0 4.5rem" }}>
      <Button variant="contained" color="secondary">
        Continue & Pay
      </Button>
    </div>
  );
};

export default PayButton;
