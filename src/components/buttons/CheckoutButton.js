import React from "react";
import { Button, Link } from "@mui/material";
import { useDispatch } from "react-redux";

const CheckoutButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ textTransform: "uppercase" }}
      >
        {" "}
        <Link href="/cart" color="inherit" style={{ textDecoration: "none" }}>
          Checkout
        </Link>
      </Button>
    </div>
  );
};

export default CheckoutButton;
