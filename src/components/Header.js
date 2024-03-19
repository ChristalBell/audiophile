import "./header.css";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/material";
import { Menu } from "@mui/base/Menu";

const Header = () => {
  return (
    <div className="header">
      <Dropdown>
        <BaseMenuButton>X </BaseMenuButton>
        <Menu id="dropdown">
          <MenuItem>Home</MenuItem>
          <MenuItem>Headphones</MenuItem>
          <MenuItem>Speakers</MenuItem>
          <MenuItem>Earphones</MenuItem>
        </Menu>
      </Dropdown>

      {/* <div className="dropdown-menu">
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>{" "}
      </div> */}

      <div>
        <img src="./assets/shared/logo.svg" alt="audiophile logo" />
      </div>

      <div>
        <img src="./assets/shared/icon-cart.svg" alt="cart" />
      </div>
    </div>
  );
};

export default Header;
