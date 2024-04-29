import React from "react";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const GoBackButton = ({ item }) => {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          fontSize: ".75rem",
          marginTop: "1rem",
          marginBottom: "1rem",
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
