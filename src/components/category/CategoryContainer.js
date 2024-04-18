import React from "react";
import CategoryInfo from "./CategoryInfo";

const CategoryContainer = () => {
  const shopInfo = [
    {
      pics: "./assets/shared/image-headphones.png",
      category: "headphones",
      link: "./headphones",
    },
    {
      pics: "./assets/shared/image-speakers.png",
      category: "speakers",
      link: "./speakers",
    },
    {
      pics: "./assets/shared/image-earphones.png",
      category: "earphones",
      link: "./earphones",
    },
  ];

  return (
    <div>
      <CategoryInfo
        pics={shopInfo[0].pics}
        category={shopInfo[0].category}
        link={shopInfo[0].link}
      />
      <CategoryInfo
        pics={shopInfo[1].pics}
        category={shopInfo[1].category}
        link={shopInfo[1].link}
      />
      <CategoryInfo
        pics={shopInfo[2].pics}
        category={shopInfo[2].category}
        link={shopInfo[2].link}
      />
    </div>
  );
};

export default CategoryContainer;
