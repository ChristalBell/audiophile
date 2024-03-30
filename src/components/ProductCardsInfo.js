import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import React from "react";
import SeeProductButton from "./SeeProductButton";

const ProductCardsInfo = ({
  display,
  model,
  pitch,
  buttonstyle,
  textcolor,
}) => {
  return (
    <div>
      <Card>
        <CardMedia image={display} title={model} />
        <CardContent>
          <Typography sx={{ textTransform: "uppercase" }}>{model}</Typography>
          <Typography>{pitch}</Typography>
        </CardContent>
        {/* <CardActions>
          <SeeProductButton variant={buttonstyle} color={textcolor} />
        </CardActions> */}
      </Card>
    </div>
  );
};

export default ProductCardsInfo;
