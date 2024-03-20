import { Button } from "@mui/material";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        src="./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
        alt="headphone"
      />
      <h3>New Product</h3>
      <h1>xx99 mark ii headphone</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button variant="contained" color="primary" size="medium">
        See Product{" "}
      </Button>
    </div>
  );
};

export default Home;
