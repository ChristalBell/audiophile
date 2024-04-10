import React from "react";
import CheckoutForm from "./CheckoutForm";
import GoBackButton from "../GoBackButton";
import SummaryForm from "./SummaryForm";

const Cart = () => {
  return (
    <div
      style={{
        backgroundColor: "hsl(0, 0%, 94%)",
        paddingLeft: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <GoBackButton />
      <div style={{ display: "flex" }}>
        <CheckoutForm />
        <SummaryForm />
      </div>
    </div>
  );
};

export default Cart;
