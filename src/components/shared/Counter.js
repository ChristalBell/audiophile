import React from "react";
import { Button } from "@mui/base";
const Counter = ({ count, setCount }) => {
  return (
    <div style={{ display: "flex" }}>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
};

export default Counter;
