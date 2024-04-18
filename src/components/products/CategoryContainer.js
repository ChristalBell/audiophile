import React from "react";
import CategoryCardInfo from "../cards/CategoryCardInfo";
import data from "../../data.json";
import { AltRoute } from "@mui/icons-material";
import GoBackButton from "../shared/GoBackButton";

const CategoryContainer = () => {
  const shopInfo = [
    {
      pics: "./assets/shared/image-headphones.png",
      title: "headphones",
      link: "./headphones",
    },
    {
      pics: "./assets/shared/image-speakers.png",
      title: "speakers",
      link: "./speakers",
    },
    {
      pics: "./assets/shared/image-earphones.png",
      title: "earphones",
      link: "./earphones",
    },
  ];

  return (
    <div>
      <CategoryCardInfo
        pics={shopInfo[0].pics}
        title={shopInfo[0].title}
        link={shopInfo[0].link}
      />
      <CategoryCardInfo
        pics={shopInfo[1].pics}
        title={shopInfo[1].title}
        link={shopInfo[1].link}
      />
      <CategoryCardInfo
        pics={shopInfo[2].pics}
        title={shopInfo[2].title}
        link={shopInfo[2].link}
      />
    </div>
  );
};

export default CategoryContainer;
