import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ShopCards = () => {
  return (
    <div>
      <Card
        sx={{
          alignItems: "center",
          backgroundColor: "primary.dark",
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",

          marginTop: "8rem",
          marginRight: "2rem",
          marginBottom: "4rem",
          marginLeft: "2rem",

          paddingTop: "6rem",
          paddingBottom: "2rem",
        }}
      >
        <CardMedia
          image="./assets/shared/image-headphones.png"
          title="Headphones"
          sx={{
            height: "10rem",
            width: "8rem",
            position: "absolute",
            translate: "0 -9rem",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              letterSpacing: ".15rem",
              textTransform: "uppercase",
            }}
          >
            headphones
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ color: "text.secondary", fontWeight: "600" }}>
            Shop
            <img src="./assets/shared/icon-arrow-right.svg" alt="shop arrow" />
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          alignItems: "center",
          backgroundColor: "primary.dark",
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",

          marginTop: "8rem",
          marginRight: "2rem",
          marginBottom: "4rem",
          marginLeft: "2rem",

          paddingTop: "6rem",
          paddingBottom: "2rem",
        }}
      >
        <CardMedia
          image="./assets/shared/image-speakers.png"
          title="Speakers"
          sx={{
            height: "10rem",
            width: "8rem",
            position: "absolute",
            translate: "0 -9rem",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              letterSpacing: ".15rem",
              textTransform: "uppercase",
            }}
          >
            speakers
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ color: "text.secondary", fontWeight: "600" }}>
            Shop
            <img src="./assets/shared/icon-arrow-right.svg" alt="shop arrow" />
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          alignItems: "center",
          backgroundColor: "primary.dark",
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",

          marginTop: "8rem",
          marginRight: "2rem",
          marginBottom: "4rem",
          marginLeft: "2rem",

          paddingTop: "6rem",
          paddingBottom: "2rem",
        }}
      >
        <CardMedia
          image="./assets/shared/image-earphones.png"
          title="Earphones"
          sx={{
            height: "10rem",
            width: "8rem",
            position: "absolute",
            translate: "0 -9rem",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              letterSpacing: ".15rem",
              textTransform: "uppercase",
            }}
          >
            earphones
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ color: "text.secondary", fontWeight: "600" }}>
            Shop
            <img src="./assets/shared/icon-arrow-right.svg" alt="shop arrow" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ShopCards;
