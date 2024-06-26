import React from "react";
import CategoryDesign from "./CategoryDesign";
import "./categoryGroup.css";

const CategoryGroup = () => {
  const info = [
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
    <div className="desktop">
      <CategoryDesign
        pics={info[0].pics}
        category={info[0].category}
        link={info[0].link}
      />
      <CategoryDesign
        pics={info[1].pics}
        category={info[1].category}
        link={info[1].link}
      />
      <CategoryDesign
        pics={info[2].pics}
        category={info[2].category}
        link={info[2].link}
      />
    </div>
  );
};

export default CategoryGroup;
