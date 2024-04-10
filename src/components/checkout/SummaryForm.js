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
      <>
        <img src="#" alt="name" />
        <p>x quantity</p>
      </>

      <div>
        <>
          <h4>Total</h4>
          <p style={{ color: "hsl(0, 0%, 5%)" }}>$Total</p>
        </>
        <>
          <h4>Shipping</h4>
          <p style={{ color: "hsl(0, 0%, 5%)" }}>$Shipping</p>
        </>
        <>
          <h4>VAT (included)</h4>
          <p style={{ color: "hsl(0, 0%, 5%)" }}>$VAT</p>
        </>
        <>
          <h4>Grand Total</h4>
          <p style={{ color: "hsl(24, 66%, 55%)" }}>$GrandTotal</p>
        </>
      </div>

      <Button variant="contained" color="secondary">
        {" "}
        Continue & Pay{" "}
      </Button>
    </div>
  );
};

export default SummaryForm;
