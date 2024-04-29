import React from "react";
import { Typography } from "@mui/material";

const CheckoutForm = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: ".5rem",
        fontWeight: "600",
        height: "85vh",
        width: "80vw",
        padding: "1rem",
        margin: "0 1.5rem",
      }}
    >
      <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
        Checkout
      </Typography>
      <form>
        <div className="billing-details">
          <p
            style={{
              color: "hsl(24, 66%, 55%)",
              textTransform: "uppercase",
            }}
          >
            Billing Details
          </p>
          <div
            className="billing-inputs"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              name="Name"
              placeholder="Name"
              required
              style={{ marginBottom: ".5rem" }}
            />
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="Email Address"
              placeholder="alex.ward@gmail.com"
              required
              style={{ marginBottom: ".5rem" }}
            />
            <label for="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              name="Phone Number"
              placeholder="(323)459-3248"
              required
            />
          </div>
        </div>

        <div className="shipping-info">
          <p style={{ color: "hsl(24, 66%, 55%)", textTransform: "uppercase" }}>
            Shipping Info
          </p>
          <div
            className="shipping-inputs"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label for="address">Address </label>
            <input
              id="address"
              type="text"
              name="Address"
              placeholder="123 Main Street Unit C"
              required
              style={{ marginBottom: ".5rem" }}
            />

            <label for="zip">Zip Code </label>
            <input
              id="zip"
              type="text"
              name="Zip Code"
              placeholder="39422"
              required
              style={{ marginBottom: ".5rem" }}
            />

            <label for="city">City</label>
            <input
              id="city"
              type="text"
              name="City"
              placeholder="City"
              required
              style={{ marginBottom: ".5rem" }}
            />

            <label for="country">Country </label>
            <input
              id="country"
              type="text"
              name="Country"
              placeholder="Country"
              required
            />
          </div>
        </div>

        <div className="payment-details">
          <p style={{ color: "hsl(24, 66%, 55%)", textTransform: "uppercase" }}>
            Payment Details
          </p>
          <p>Payment Method</p>
          <div className="payment-inputs">
            <div className="radio-options" style={{ display: "flex" }}>
              <input
                id="emoney"
                type="radio"
                name="emoney"
                value="e-Money"
                style={{ marginBottom: ".5rem" }}
              />
              <label for="emoney">e-Money</label>
              <input
                id="cash"
                type="radio"
                name="cash"
                value="Cash on Delivery"
                style={{ marginBottom: ".5rem" }}
              />
              <label for="cash">Cash on Delivery</label>
            </div>
            <div
              className="e"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label for="emnumber"> e-Money Number </label>
              <input
                id="emnumber"
                type="text"
                name="eMNumber"
                placeholder="340239455"
                style={{ marginBottom: ".5rem" }}
              />
              <label for="empin"> </label> e-Money Pin
              <input id="empin" type="text" name="eMPin" placeholder="4823" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
