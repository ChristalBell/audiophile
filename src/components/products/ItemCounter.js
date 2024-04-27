import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        backgroundColor: "hsl(0, 0%, 94%)",
        borderRadius: ".25rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
};
export default Counter;
