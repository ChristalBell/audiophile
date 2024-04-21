import React from "react";
import CategoryHome from "./CategoryHome";
import data from "../../data.json";
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
      <CategoryHome item={newItem} />
    </div>
  );
};

export default Earphones;
