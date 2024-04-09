import React from "react";
import { FormControl } from "@mui/base/FormControl";
import { Typography } from "@mui/material";
import { Input } from "@mui/base/Input";
import { Label } from "@mui/icons-material";
import { InputLabel } from "@mui/material";

const CheckoutForm = () => {
  return (
    <div>
      <Typography variant="h1">Checkout</Typography>

      <div>
        <Typography variant="h4">Billing Details</Typography>
        <FormControl defaultValue="" required>
          <InputLabel>Name</InputLabel>
          <Input placeholder="Alex Ward" />
        </FormControl>

        <FormControl>
          <Label>Email Address</Label>

          <InputLabel>Phone Number</InputLabel>
        </FormControl>
      </div>

      <div>
        <FormControl defaultValue="" required>
          <Typography variant="h4">Shipping Info</Typography>
          <InputLabel>Address</InputLabel>

          <InputLabel>Zip Code</InputLabel>

          <InputLabel>City</InputLabel>

          <InputLabel>Country</InputLabel>
        </FormControl>
      </div>

      <div>
        <FormControl defaultValue="" required>
          <Typography variant=" h4">Payment Details</Typography>
          <Typography variant="h6">Payment Method</Typography>

          {/* Check box e-Money Cash on Delivery */}
          <InputLabel>e-Money Number</InputLabel>
          <InputLabel>e-Money Pin</InputLabel>
        </FormControl>
      </div>
    </div>
  );
};

export default CheckoutForm;
