import React from "react";
import data from "../../data.json";
import DirectLinkButton from "../buttons/DirectLinkButton";
import { Typography } from "@mui/material";

const CategoryHome = ({ item }) => {
  return (
    <div>
      <div className="right">
        <div className="new-product">
          <Typography variant="h6">New Product</Typography>
        </div>
        <div>
          <Typography variant="h2">{item.name}</Typography>
          <p>{item.description}</p>
        </div>
        <DirectLinkButton link={`${item.category}/${item.slug}`} />
      </div>
    </div>
  );
};

export default CategoryHome;
