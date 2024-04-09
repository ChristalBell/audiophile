import { Button } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

const SeeProductButton = ({ textcolor, buttonstyle, link }) => {
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
        <Link
          href={link}
          underline="none"
          sx={{
            color: "text.secondary",
            fontWeight: "600",
          }}
        >
          See Product
        </Link>
      </Button>
    </div>
  );
};

export default SeeProductButton;
