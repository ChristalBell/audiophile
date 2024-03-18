import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="dropdown-menu">
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>{" "}
      </div>

      <div>logo</div>

      <div>cart</div>
    </div>
  );
};

export default Header;
