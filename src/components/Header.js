import React, { useState } from "react";
import "./header.css";
import { ToggleButton } from "@mui/material";

const Header = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="header">
      <ToggleButton
        id="checkbox"
        value="check"
        selected={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      >
        X{" "}
      </ToggleButton>
      <div className="dropdown-menu">
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>{" "}
      </div>

      <div>
        <img src=".../logo.svg" alt="audiophile logo" />
      </div>

      <div>cart</div>
    </div>
  );
};

export default Header;
