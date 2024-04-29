import { Button } from "@mui/material";
import React from "react";
import data from "../../data.json";

const ProductGallery = () => {
  console.log(data.gallery);
  return (
    <div>
      <div className="left">
        <Button variant="contained">h</Button>
        <img src="{}" alt=" " style={{ height: "25vh", width: "25vw" }} />

        {/* <img src={gallery[1].mobile} alt=" " />{" "}
      </div>
      <div className="right">
        <img src={gallery[2].mobile} alt=" " />{" "} */}
      </div>
    </div>
  );
};

export default ProductGallery;
