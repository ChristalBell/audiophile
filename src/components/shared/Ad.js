import React from "react";
import "./ad.css";

const Ad = () => {
  return (
    <div
      className="ad-container"
      style={{ textAlign: "center", marginBottom: "4rem" }}
    >
      <img
        src="./assets/shared/image-best-gear.jpg"
        alt="best gear ad"
        style={{
          borderRadius: ".25rem",
          height: "20rem",
          width: "22rem",
        }}
      />
      <div className="ad-text">
        <h1 style={{ textTransform: "uppercase" }}>
          Bringing you the{" "}
          <strong style={{ color: "hsl(24, 66%, 55%)" }}>Best</strong> audio
          gear
        </h1>
        <p
          style={{
            color: "hsl(0, 0%, 47%)",
            fontWeight: "500",
            lineHeight: "1.5rem",
            margin: "0 2rem",
          }}
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.{" "}
        </p>
      </div>
    </div>
  );
};

export default Ad;
