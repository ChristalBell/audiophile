import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Link,
  Button,
} from "@mui/material";

const CategoryDesign = ({ pics, category, link }) => {
  return (
    <div>
      <Card
        sx={{
          alignItems: "center",
          backgroundColor: "primary.dark",
          borderRadius: ".25rem",
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
          image={pics}
          category={category}
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
            {category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Link
              href={link}
              underline="none"
              sx={{
                color: "text.secondary",
                fontWeight: "600",
              }}
            >
              Shop
              <img
                src="./assets/shared/icon-arrow-right.svg"
                alt="shop arrow"
              />
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CategoryDesign;
