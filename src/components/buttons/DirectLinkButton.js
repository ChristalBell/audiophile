import { Button } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

const DirectLinkButton = ({ textcolor, buttonstyle, link }) => {
  return (
    <div>
      <Link
        href={link}
        underline="none"
        sx={{
          color: "text.secondary",
          fontWeight: "600",
        }}
      >
        <Button
          variant={buttonstyle}
          color={textcolor}
          sx={{
            borderRadius: "0.1rem",
            fontWeight: 600,
            marginTop: "1.25rem",
            padding: "1rem 1.5rem",
          }}
        >
          See Product
        </Button>
      </Link>
    </div>
  );
};

export default DirectLinkButton;
