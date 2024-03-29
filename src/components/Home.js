import { Button } from "@mui/material";
import React from "react";
import "./home.css";
import { LineWeight } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img
          className="image-box"
          src="./assets/shared/image-hero.jpg"
          alt="headphone"
        />
      </div>

      <div className="hero-info">
        <h3
          style={{
            fontWeight: 300,
            letterSpacing: ".6rem ",
            textTransform: "uppercase",
          }}
        >
          New Product
        </h3>
        <h1 style={{ color: "hsl(0, 0%, 100%)", textTransform: "uppercase" }}>
          xx99 mark ii headphone
        </h1>
        <p
          style={{
            color: "hsl(0,0%,73%)",

            fontWeight: " 600",
            lineHeight: "1.5rem",
            translate: "0 -.5rem",
          }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>

      <Button variant="contained" color="primary" size="medium">
        See Product{" "}
      </Button>
    </div>
  );
};

export default Home;
