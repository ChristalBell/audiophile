import React from "react";
import data from "../../data.json";
import SeeProductButton from "../SeeProductButton";
import { Typography } from "@mui/material";

const Products = ({ image, type, title, description }) => {
  console.log(data);
  const spbutton = [
    {
      textcolor: "secondary",
      buttonstyle: "contained",
    },
  ];
  return (
    <div
      style={{
        marginTop: "3rem",
        marginRight: "3rem",
        marginBottom: "6rem",
        marginLeft: "3rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={image}
        alt={type}
        style={{ borderRadius: ".25rem", height: "24rem", width: "24rem" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
        <p
          style={{
            justifyContent: "center",
            lineHeight: "1.5rem",
            textAlign: "center",
          }}
        >
          {description}
        </p>
        <SeeProductButton
          textcolor={spbutton[0].textcolor}
          buttonstyle={spbutton[0].buttonstyle}
        />
      </div>
    </div>
  );
};

export default Products;
