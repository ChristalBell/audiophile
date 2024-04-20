import React from "react";
import data from "../../data.json";
import DirectLinkButton from "../buttons/DirectLinkButton";
import { Modal, Typography } from "@mui/material";
import ProductDetail from "../products/ProductDetail";

const CategoryHome = () => {
  // const spbutton = [
  //   {
  //     textcolor: "secondary",
  //     buttonstyle: "contained",
  //     link: data.slug,
  //   },
  // ];
  return (
    <div>
      {/* <div className="left">
        <img src={data.image.mobile} alt={data.name} />
      </div> */}
      <div className="right">
        <div className="new-product">
          <Typography variant="h6">New Product</Typography>
        </div>
        <div>
          <Typography variant="h2">{data[0].name}</Typography>
          <p>{data[0].description}</p>
        </div>
        <DirectLinkButton link={data[3].slug} />
      </div>
    </div>

    // <div
    //   style={{
    //     marginTop: "3rem",
    //     marginRight: "3rem",
    //     marginBottom: "6rem",
    //     marginLeft: "3rem",
    //     alignItems: "center",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    //   <img
    //     src={image}
    //     alt={type}
    //     style={{ borderRadius: ".25rem", height: "24rem", width: "24rem" }}
    //   />

    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       marginTop: "3rem",
    //     }}
    //   >
    //     <Typography
    //       variant="h6"
    //       sx={{
    //         textTransform: "uppercase",
    //         fontWeight: "600",
    //       }}
    //     >
    //       {title}
    //     </Typography>
    //     <p
    //       style={{
    //         justifyContent: "center",
    //         lineHeight: "1.5rem",
    //         textAlign: "center",
    //       }}
    //     >
    //       {description}
    //     </p>

    //   </div>
    // </div>
  );
};

export default CategoryHome;
