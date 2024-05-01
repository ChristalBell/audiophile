import React from "react";
import { Button } from "@mui/material";
const Counter = ({ count, setCount }) => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <p
        style={{
          margin: "1rem",
        }}
      >
        {count}
      </p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
