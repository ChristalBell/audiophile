import React from "react";
import { Typography } from "@mui/material";

const CheckoutForm = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: ".5rem",
        fontWeight: "600",
        paddingBottom: "2rem",
        padding: "2rem",
        height: "75%",
        width: "50%",
      }}
    >
      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
        Checkout
      </Typography>
      <form>
        <p style={{ color: "hsl(24, 66%, 55%)", textTransform: "uppercase" }}>
          Billing Details
        </p>
        <div
          style={{
            paddingBottom: "2rem",
          }}
        >
          <label>Name</label>
          <input type="text" name="Name" placeholder="Name" required />{" "}
          <label>Email Address</label>
          <input
            type="email"
            name="Email Address"
            placeholder="alex.ward@gmail.com"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="Phone Number"
            placeholder="(323)459-3248"
            required
          />
        </div>

        <p style={{ color: "hsl(24, 66%, 55%)", textTransform: "uppercase" }}>
          Shipping Info
        </p>
        <div style={{ paddingBottom: "2rem" }}>
          <label>Address </label>
          <input
            type="text"
            name="Address"
            placeholder="123 Main Street Unit C"
            required
          />

          <label>Zip Code </label>
          <input type="text" name="Zip Code" placeholder="39422" required />

          <label>City</label>
          <input type="text" name="City" placeholder="City" required />

          <label>Country </label>
          <input type="text" name="Country" placeholder="Country" required />
        </div>
        <p style={{ color: "hsl(24, 66%, 55%)", textTransform: "uppercase" }}>
          Payment Details
        </p>
        <div>
          <p>Payment Method</p>
          <input type="radio" name="emoney" value="e-Money" />
          <label for="emoney">e-Money</label>
          <input type="radio" name="cash" value="Cash on Delivery" />
          <label for="cash">Cash on Delivery</label>
          <label for="eMNumber"> e-Money Number </label>
          <input type="text" name="eMNumber" placeholder="340239455" />
          <label for="eMPin"> </label> e-Money Pin
          <input type="text" name="eMPin" placeholder="4823" />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
