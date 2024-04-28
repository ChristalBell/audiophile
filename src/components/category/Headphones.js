import React from "react";
import CategoryDetail from "./CategoryDetail";
import data from "../../data.json";
import { Typography } from "@mui/material";
import CategoryGroup from "./CategoryGroup";
import Ad from "../shared/Ad";

const Headphones = () => {
  const headphones = [];
  let newItem = {};
  const otherItems = [];

  data.forEach((item) => {
    if (item.category === "headphones") {
      headphones.push(item);
    }
  });

  headphones.map((item) => {
    if (item.new === true) {
      newItem = item;
    } else if (item.new === false) {
      otherItems.push(item);
    }
    return item;
  });
  return (
    <div>
      <div>
        <CategoryDetail item={newItem} />
        <CategoryDetail item={otherItems[1]} />
        <CategoryDetail item={otherItems[0]} />
      </div>
      <CategoryGroup />
      <Ad />
    </div>
  );
};

export default Headphones;
