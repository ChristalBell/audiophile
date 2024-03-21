import "./header.css";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/material";
import { Menu } from "@mui/base/Menu";

const Header = () => {
  return (
    <div className="header">
      <Dropdown>
        <BaseMenuButton> X </BaseMenuButton>
        <Menu id="dropdown">
          <MenuItem>Home</MenuItem>
          <MenuItem>Headphones</MenuItem>
          <MenuItem>Speakers</MenuItem>
          <MenuItem>Earphones</MenuItem>
        </Menu>
      </Dropdown>

      <div>
        {" "}
        <a href="#" alt="home">
          <img src="./assets/shared/logo.svg" alt="audiophile logo" />{" "}
        </a>
      </div>

      {/* Hide for tablet and larger  */}
      <div className="largerheader">
        <ul>
          <li>
            <a href="#" alt="home">
              Home
            </a>
          </li>
          <li>
            <a href="#" alt="headphones">
              Headphones
            </a>
          </li>
          <li>
            <a href="#" alt="speakers">
              Speakers
            </a>
          </li>
          <li>
            <a href="#" alt="earphones">
              Earphones
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#" alt="cart">
          <img src="./assets/shared/icon-cart.svg" alt="cart" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Header;
