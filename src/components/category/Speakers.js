import React from "react";
import CategoryHome from "./CategoryHome";
import data from "../../data.json";

const Speakers = () => {
  const speakers = [];
  let newItem = {};
  const otherItems = [];

  data.forEach((item) => {
    if (item.category === "speakers") {
      speakers.push(item);
    }
  });

  speakers.map((item) => {
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
      <CategoryHome item={otherItems[0]} />
    </div>
  );
};

export default Speakers;
