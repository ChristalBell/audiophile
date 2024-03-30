import React from "react";
import ShopCardsInfo from "./ShopCardsInfo";

const ShopCards = () => {
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
      <ShopCardsInfo
        pics={shopInfo[0].pics}
        title={shopInfo[0].title}
        link={shopInfo[0].link}
      />
      <ShopCardsInfo
        pics={shopInfo[1].pics}
        title={shopInfo[1].title}
        link={shopInfo[1].link}
      />
      <ShopCardsInfo
        pics={shopInfo[2].pics}
        title={shopInfo[2].title}
        link={shopInfo[2].link}
      />
    </div>
  );
};

export default ShopCards;
