import React from "react";
import { Link, Button } from "@mui/material";

const AddToCartButton = () => {
  return (
    <div>
      <Link href="/cart ">
        <Button variant="contained" color="secondary">
          Add to Cart
        </Button>
      </Link>
    </div>
  );
};

export default AddToCartButton;
