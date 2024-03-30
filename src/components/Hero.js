import React from "react";
import "./hero.css";
import SeeProductButton from "./SeeProductButton";

const Hero = () => {
  const homebutton = [
    {
      textcolor: "secondary",
      buttonstyle: "contained",
    },
  ];

  return (
    <div className="hero">
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
            fontSize: "1rem",
            letterSpacing: ".6rem ",
            textTransform: "uppercase",
          }}
        >
          New Product
        </h3>
        <h1
          style={{
            color: "hsl(0, 0%, 100%)",
            textTransform: "uppercase",
          }}
        >
          xx99 mark ii headphone
        </h1>
        <p
          style={{
            color: "hsl(0,0%,73%)",
            fontWeight: " 500",
            lineHeight: "1.5rem",
          }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div>
          <SeeProductButton
            textcolor={homebutton[0].textcolor}
            buttonstyle={homebutton[0].buttonstyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
