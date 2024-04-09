import React from "react";
import CheckoutForm from "./CheckoutForm";
import GoBackButton from "../GoBackButton";

const Cart = () => {
  return (
    <div>
      <GoBackButton />
      <CheckoutForm />
    </div>
  );
};

export default Cart;
