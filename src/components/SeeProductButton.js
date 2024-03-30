import { Button } from "@mui/material";
import React from "react";

const SeeProductButton = ({ textcolor, buttonstyle }) => {
  return (
    <div>
      <Button
        color={textcolor}
        variant={buttonstyle}
        sx={{
          borderRadius: "0.1rem",
          fontWeight: 600,
          marginTop: "1.25rem",
          padding: "1rem 1.5rem",
        }}
      >
        See Product
      </Button>
    </div>
  );
};

export default SeeProductButton;
