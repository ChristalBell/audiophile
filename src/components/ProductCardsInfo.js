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
  imgh,
  imgw,
}) => {
  return (
    <div>
      <img
        src={display}
        alt={model}
        style={{
          borderRadius: ".25rem",
          marginTop: "2rem",
          marginRight: "2rem",
          marginBottom: "2rem",
          marginLeft: "2rem",

          height: { imgh },
          width: { imgw },
        }}
      />
      <Card
        sx={{
          backgroundColor: "primary.dark",
          borderRadius: ".25rem",

          marginTop: "2rem",
          marginRight: "2rem",
          marginBottom: "2rem",
          marginLeft: "2rem",

          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: "1.25rem",
        }}
      >
        {/* <CardMedia
          image={display}
          title={model}
          sx={{
            height: "22.5rem",
            width: "8rem",
            position: "absolute",
          }}
        /> */}
        <CardContent>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: "600" }}
          >
            {model}
          </Typography>
          <Typography>{pitch}</Typography>
        </CardContent>
        <CardActions>
          <SeeProductButton buttonstyle={buttonstyle} textcolor={textcolor} />
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCardsInfo;
