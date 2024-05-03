import React from "react";
import { Typography } from "@mui/material";
import DirectLinkButton from "../buttons/DirectLinkButton";
import "./directProductCard.css";

// on the home page these are ads for the see direct products
const DirectProductCard = () => {
  const speakerButton = [
    {
      textcolor: "primary",
      buttonstyle: "contained",
      link: "/speakers/zx9-speaker",
    },
    { buttonstyle: "outlined", link: "/speakers/zx7-speaker" },
    { link: "/earphones/yx1-earphones" },
  ];
  return (
    <div
      className="main-container"
      style={{
        alignItems: "center",
        margin: "2rem",
        textAlign: "center",
      }}
    >
      <div
        className="product-one"
        style={{
          backgroundColor: "hsl(24, 66%, 55%)",
          borderRadius: ".5rem",
          color: "hsl(0, 0%, 98%)",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "4rem",
          margin: "4rem 0",
        }}
      >
        <div></div>
        <img
          className="product-one-image"
          src="./assets/shared/image-speakers.png"
          alt="zx9-speaker"
          style={{ marginTop: "4rem", marginBottom: "-2rem" }}
        />
        <div className="product-one-text">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            zx9 speaker
          </Typography>
          <p style={{ display: "flex", padding: "2rem" }}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <DirectLinkButton
            textcolor={speakerButton[0].textcolor}
            buttonstyle={speakerButton[0].buttonstyle}
            link={speakerButton[0].link}
          />
        </div>
      </div>
      <div
        className="product-two"
        style={{
          display: "flex",
          backgroundColor: "hsl(0,0%,92%)",
          borderRadius: ".5rem",
        }}
      >
        <div style={{ padding: "8rem 2rem", width: "30vw" }}>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            zx7 speaker
          </Typography>
          <DirectLinkButton
            buttonstyle={speakerButton[1].buttonstyle}
            link={speakerButton[1].link}
          />
        </div>
        <div className="product-two-image">
          <img
            src="./assets/product-zx7-speaker/mobile/image-gallery-3.jpg"
            alt="zx7-speaker"
            style={{
              height: "25vh",
              width: "25vw",
              marginTop: "4rem",
              translate: "-4rem 4rem",
            }}
          />
        </div>
      </div>
      <div className="product-three">
        <img
          id="product-three-image"
          src="./assets/home/mobile/image-earphones-yx1.jpg"
          alt="yx1-earphones"
          style={{ borderRadius: ".5rem", width: "30vw", margin: "2rem 0" }}
        />
        <div
          className="product-three-text"
          style={{
            backgroundColor: "hsl(0,0%,92%)",
            borderRadius: ".5rem",
            margin: "2rem ",
            padding: "4rem",
            width: "10vw",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            yx1 earphones
          </Typography>
          <DirectLinkButton
            buttonstyle={speakerButton[1].buttonstyle}
            link={speakerButton[2].link}
          />
        </div>
      </div>
    </div>
  );
};

export default DirectProductCard;
