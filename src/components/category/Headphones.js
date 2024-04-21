import React from "react";
import CategoryHome from "./CategoryHome";
import data from "../../data.json";

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
      <CategoryHome item={newItem} />
      <CategoryHome item={otherItems[1]} />
      <CategoryHome item={otherItems[0]} />
    </div>
  );
};

export default Headphones;
