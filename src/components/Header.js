import "./header.css";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { Link, MenuItem, Paper } from "@mui/material";
import { Menu } from "@mui/base/Menu";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="dropdown">
          <Dropdown>
            <BaseMenuButton>
              <MenuIcon
                sx={{
                  backgroundColor: "primary.main",
                  border: "",
                  color: "primary.light",
                }}
              />
            </BaseMenuButton>
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
                    home
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
            <img src="./assets/shared/logo.svg" alt="audiophile logo" />
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
          <Link href="/cart" color="inherit">
            {" "}
            <img src="./assets/shared/icon-cart.svg" alt="cart" />
          </Link>
        </div>
      </div>

      <div>
        <hr
          style={{
            border: "1px solid hsl(0, 0%, 94%)",
            margin: "0 8%",
            display: "flex",
          }}
        ></hr>
      </div>
    </>
  );
};

export default Header;
