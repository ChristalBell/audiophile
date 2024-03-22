import { Button } from "@mui/material";
import React from "react";
import "./home.css";
import { LineWeight } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-overlay">
        <img
          className="image-box"
          src="./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
          alt="headphone"
        />
      </div>

      <div className="hero-info">
        <h2
          style={{
            fontWeight: 300,
            letterSpacing: ".7rem ",
            textTransform: "uppercase",
          }}
        >
          New Product
        </h2>
        <h1 style={{ color: "hsl(0, 0%, 100%)", textTransform: "uppercase" }}>
          xx99 mark ii headphone
        </h1>
        <p
          style={{
            fontWeight: " 500",
            lineHeight: "2rem",
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
