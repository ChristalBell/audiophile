import "./header.css";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Badge, Divider, Link, MenuItem, Paper, Button } from "@mui/material";
import { Menu } from "@mui/base/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import CartPreview from "../checkout/CartPreview";

const Header = () => {
  // const { cartItemCount } = useSelector((state) => state.cartItemCount);
  return (
    <>
      <div className="header">
        <div className="dropdown">
          <Dropdown

          // sx={{
          //   backgroundColor: "primary.main",
          //   color: "primary.light",
          // }}
          >
            <MenuButton>
              <MenuIcon />
            </MenuButton>
            <Menu>
              <Paper
                variant="elevation=2"
                square={false}
                sx={{
                  backgroundColor: " primary.light",
                  textTransform: "uppercase",
                }}
              >
                <MenuItem>
                  <Link href="/home" color="inherit" underline="none">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link href="/headphones" color="inherit" underline="none">
                    headphones
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link href="/speakers" color="inherit" underline="none">
                    speakers
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link href="/earphones" color="inherit" underline="none">
                    earphones
                  </Link>
                </MenuItem>
              </Paper>
            </Menu>
          </Dropdown>
        </div>

        <div className="logo">
          <Link href="/home" color="inherit">
            <img src="../assets/shared/logo.svg" alt="audiophile logo" />
          </Link>
        </div>

        {/* Hide for tablet and smaller  */}
        <div className="desktop-header">
          <Link href="/home" color="inherit" underline="none">
            home
          </Link>
          <Link
            href="/headphones"
            color="inherit"
            underline="none"
            sx={{
              pl: 2,
            }}
          >
            headphones
          </Link>
          <Link
            href="/speakers"
            color="inherit"
            underline="none"
            sx={{
              pl: 2,
            }}
          >
            speakers
          </Link>
          <Link
            href="/earphones"
            color="inherit"
            underline="none"
            sx={{
              pl: 2,
            }}
          >
            earphones
          </Link>
        </div>

        <div className="cart-link">
          <Button>
            {/* <Badge badgeContent={cartItemCount} color="secondary"> */}
            <Link href="/cart" color="inherit">
              <img src="../assets/shared/icon-cart.svg" alt="cart" />
            </Link>
            {/* </Badge> */}
          </Button>
          <div className="preview-dropdown">
            <CartPreview />
          </div>
        </div>
      </div>

      <div>
        <Divider variant="middle" />
      </div>
    </>
  );
};

export default Header;
