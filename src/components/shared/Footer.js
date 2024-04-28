import { Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "black",
        color: "hsl(0, 0%, 100%)",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <h1>
        <img src="./assets/shared/logo.svg" alt="audiophile logo" />
      </h1>

      {/* links */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontWeight: "600",
          marginBottom: "2rem",

          textTransform: "uppercase",
        }}
      >
        <Link
          href="/home"
          color="inherit"
          underline="none"
          sx={{ paddingBottom: " 1.5rem" }}
        >
          home
        </Link>
        <Link
          href="/headphones"
          color="inherit"
          underline="none"
          sx={{ paddingBottom: " 1.5rem" }}
        >
          headphones{" "}
        </Link>
        <Link
          href="/speakers"
          color="inherit"
          underline="none"
          sx={{ paddingBottom: " 1.5rem" }}
        >
          speakers{" "}
        </Link>
        <Link
          href="/earphones"
          color="inherit"
          underline="none"
          sx={{ paddingBottom: " 1.5rem" }}
        >
          earphones{" "}
        </Link>
      </div>

      {/* text */}
      <div
        style={{
          color: "hsl(0, 0%, 47%)",
          paddingBottom: "3rem",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "3rem" }}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.{" "}
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>

      {/* socials */}
      <div>
        <Link
          href="facebook.com"
          color="inherit"
          underline="none"
          style={{ marginRight: "1.5rem", marginLeft: "2rem" }}
        >
          <img src="./assets/shared/icon-facebook.svg" alt="facebook" />{" "}
        </Link>
        <Link
          href="twitter.com"
          color="inherit"
          underline="none"
          style={{ marginRight: "1.5rem" }}
        >
          <img src="./assets/shared/icon-twitter.svg" alt="Twitter" />{" "}
        </Link>
        <Link
          href="instagram.com"
          color="inherit"
          underline="none"
          style={{ marginRight: "1.5rem" }}
        >
          <img src="/assets/shared/icon-instagram.svg" alt="Instagram" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
