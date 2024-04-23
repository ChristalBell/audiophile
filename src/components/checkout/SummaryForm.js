import React from "react";
import Button from "@mui/material/Button";

const SummaryForm = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: ".5rem",
        fontWeight: "600",
        height: "20rem",
        padding: "2rem",
        textTransform: "uppercase",
        width: "20rem",
        marginLeft: "2rem",
      }}
    >
      <h3>Summary</h3>
      <div
        className="item-display"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src="#" alt="name" />
        <p>x quantity</p>
      </div>

      <div className="container">
        <div className="pricing ">
          <h4>Total</h4>
          <p style={{ color: "hsl(0, 0%, 5%)" }}>$Total</p>
        </div>
        <div div className="shipping-cost">
          <h4>Shipping</h4>
          <p style={{ color: "hsl(0, 0%, 5%)" }}>$Shipping</p>
        </div>
        <div className="taxes">
          <h4>VAT (included)</h4>
          <p style={{ color: "hsl(0, 0%, 5%)" }}>$VAT</p>
        </div>
        <div className="total">
          <h4>Grand Total</h4>
          <p style={{ color: "hsl(24, 66%, 55%)" }}>$GrandTotal</p>
        </div>
      </div>

      <Button variant="contained" color="secondary">
        {" "}
        Continue & Pay{" "}
      </Button>
    </div>
  );
};

export default SummaryForm;
