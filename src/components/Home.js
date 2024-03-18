import { Button } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h3>New Product</h3>
      <h1>xx99 mark ii headphones</h1>
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
