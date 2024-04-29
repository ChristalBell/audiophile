import React from "react";
import CheckoutForm from "./CheckoutForm";
import GoBackButton from "../buttons/GoBackButton";
import SummaryForm from "./SummaryForm";

const Cart = () => {
  return (
    <div
      style={{
        backgroundColor: "hsl(0, 0%, 94%)",
        paddingBottom: "4rem",
      }}
    >
      <GoBackButton />
      <div>
        <CheckoutForm />
        {/* <SummaryForm /> */}
      </div>
    </div>
  );
};

export default Cart;
