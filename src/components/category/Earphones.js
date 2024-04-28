import React from "react";
import CategoryDetail from "./CategoryDetail";
import data from "../../data.json";
import CategoryGroup from "./CategoryGroup";
import Ad from "../shared/Ad";

const Earphones = () => {
  const earphones = [];
  let newItem = {};
  const otherItems = [];

  data.forEach((item) => {
    if (item.category === "earphones") {
      earphones.push(item);
    }
  });

  earphones.map((item) => {
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
      </div>
      <CategoryGroup />
      <Ad />
    </div>
  );
};

export default Earphones;
