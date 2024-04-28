import React from "react";
import DirectLinkButton from "../buttons/DirectLinkButton";
import { Typography } from "@mui/material";
import CategoryGroup from "./CategoryGroup";
import Ad from "../shared/Ad";

const CategoryDetail = ({ item }) => {
  const styledButton = {
    textcolor: "secondary",
    buttonstyle: "contained",
  };
  return (
    <div style={{ textAlign: "center", lineHeight: "1.5rem", padding: "2rem" }}>
      <div className="right">
        <div>
          <img
            src={item.image.mobile}
            alt={item.name}
            style={{ borderRadius: ".5rem" }}
          />
        </div>
        <Typography
          variant="h6"
          sx={{
            color: "hsl(24, 66%, 55%)",
            fontWeight: "bold",
            letterSpacing: ".25rem",
          }}
        >
          New Product
        </Typography>
        <div className="new-product"></div>
        <div>
          <Typography variant="h2">{item.name}</Typography>
          <p>{item.description}</p>
        </div>
        <DirectLinkButton
          buttonstyle={styledButton.buttonstyle}
          textcolor={styledButton.textcolor}
          link={`${item.category}/${item.slug}`}
        />
      </div>
    </div>
  );
};

export default CategoryDetail;
