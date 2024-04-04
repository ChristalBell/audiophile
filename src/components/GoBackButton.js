import React from "react";
import Button from "@mui/material/Button";

const GoBackButton = () => {
  return (
    <div>
      <Button
        variant="text"
        sx={{
          fontSize: ".75rem",
          marginTop: "4rem",
          marginLeft: "2rem",
          textTransform: "capitalize",
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default GoBackButton;
