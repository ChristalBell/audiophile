import React from "react";
import data from "../data.json";
import SeeProductButton from "./SeeProductButton";
import ShopCards from "./ShopCards";
import Ad from "./Ad";

import { Typography } from "@mui/material";
import GoBackButton from "./GoBackButton";

const Products = () => {
  console.log(data);
  const spbutton = [
    {
      textcolor: "secondary",
      buttonstyle: "contained",
    },
  ];
  return (
    <>
      <GoBackButton />
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
          src={data[0].image[0].mobile}
          alt="headphones"
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
            variant="h5"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            {data[0].title}
          </Typography>
          <p
            style={{
              justifyContent: "center",
              lineHeight: "1.5rem",
              textAlign: "center",
            }}
          >
            {data[0].description}
          </p>
          <SeeProductButton
            textcolor={spbutton[0].textcolor}
            buttonstyle={spbutton[0].buttonstyle}
          />
        </div>

        <ShopCards />
        <Ad />
      </div>
    </>
  );
};

export default Products;
