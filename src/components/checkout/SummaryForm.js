import React from "react";
import PayButton from "../buttons/PayButton";

const SummaryForm = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: ".5rem",
        fontWeight: "600",
        height: "50vh",
        width: "80vw",
        padding: "1rem",
        margin: "2rem 1.5rem",
        textTransform: "uppercase",
      }}
    >
      <h4 style={{ textTransform: "uppercase" }}>Summary</h4>

      <div
        className="item-details"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src="#" alt="name" />
        <p>x quantity</p>
      </div>

      <div className="summary-details">
        <div
          className="total "
          style={{
            display: "flex ",
            alignItems: "center",
          }}
        >
          <h4 style={{ color: "hsl(0, 0%, 47%)" }}>Total</h4>
          <p style={{ marginLeft: "2rem" }}>$Total</p>
        </div>
        <div
          className="shipping-cost"
          style={{ display: "flex ", alignItems: "center" }}
        >
          <h4 style={{ color: "hsl(0, 0%, 47%)" }}>Shipping</h4>
          <p style={{ marginLeft: "2rem" }}>$Shipping</p>
        </div>
        <div
          className="taxes"
          style={{ display: "flex ", alignItems: "center" }}
        >
          <h4 style={{ color: "hsl(0, 0%, 47%)" }}>VAT (included)</h4>
          <p style={{ marginLeft: "2rem" }}>$VAT</p>
        </div>
        <div
          className="grand-total"
          style={{ display: "flex ", alignItems: "center" }}
        >
          <h4 style={{ color: "hsl(0, 0%, 47%)" }}>Grand Total</h4>
          <p style={{ color: "hsl(24, 66%, 55%)", marginLeft: "2rem" }}>
            $GrandTotal
          </p>
        </div>
      </div>
      <PayButton />
    </div>
  );
};

export default SummaryForm;
