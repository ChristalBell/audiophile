import React from "react";
import ProductCardsInfo from "./ProductCardsInfo";

const DirectProductCard = () => {
  const moreCards = [
    {
      display: "./assets/shared/image-speakers.png",
      model: "zx9 speaker",
      pitch:
        "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    },
    {
      display: "./assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
      model: "zx7 speaker",
      pitch: "",
    },
    {
      display: "./assets/home/mobile/image-earphones-yx1.jpg",
      model: "yx1 earphones",
      pitch: "",
    },
  ];

  const spbutton = [
    {
      textcolor: "primary",
      buttonstyle: "contained",
    },
    {
      textcolor: "primary",
      buttonstyle: "outlined",
    },
  ];
  return (
    <div>
      {/* double height of other two product cards */}

      <ProductCardsInfo
        display={moreCards[0].display}
        model={moreCards[0].model}
        pitch={moreCards[0].pitch}
        textcolor={spbutton[0].textcolor}
        buttonstyle={spbutton[0].buttonstyle}
      />

      <ProductCardsInfo
        display={moreCards[1].display}
        model={moreCards[1].model}
        pitch={moreCards[1].pitch}
        textcolor={spbutton[1].textcolor}
        buttonstyle={spbutton[1].buttonstyle}
      />

      <ProductCardsInfo
        display={moreCards[2].display}
        model={moreCards[2].model}
        pitch={moreCards[2].pitch}
        textcolor={spbutton[1].textcolor}
        buttonstyle={spbutton[1].buttonstyle}
      />
    </div>
  );
};

export default DirectProductCard;