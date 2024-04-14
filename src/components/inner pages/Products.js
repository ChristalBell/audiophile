import React from "react";
import data from "../../data.json";
import DirectLinkButton from "../DirectLinkButton";
import { Modal, Typography } from "@mui/material";

const Products = ({ image, type, title, description }) => {
  console.log(data);
  const spbutton = [
    {
      textcolor: "secondary",
      buttonstyle: "contained",
      link: <Modal />,
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
        <DirectLinkButton
          textcolor={spbutton[0].textcolor}
          buttonstyle={spbutton[0].buttonstyle}
          link={spbutton[0].link}
        />
      </div>
    </div>
  );
};

export default Products;
