import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/shared/Header";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/shared/Footer";
import Headphones from "./components/category/Headphones";
import Speakers from "./components/category/Speakers";
import Earphones from "./components/category/Earphones";
import Cart from "./components/checkout/Cart";
import Model from "./components/products/ProductDetail";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(0, 0%, 10%)",
        light: "hsl(0, 0%, 98%)",
        dark: "hsl(0, 0%, 94%)",
      },
      secondary: {
        main: "hsl(24, 66%, 55%)",
        light: "hsl(21,71%,57%)",
        dark: "hsl(21,65%,57%)",
      },
      text: {
        primary: "hsl(0, 0%, 5%)",
        secondary: "hsl(0, 0%, 47%)",
      },
      shape: {
        borderRadius: ".15rem",
      },

      button: {
        fontWeight: "300",
        textTransform: "uppercase",
      },
    },
  });
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/headphones">
              <Headphones />
            </Route>
            <Route exact path="/speakers">
              <Speakers />
            </Route>
            <Route exact path="/earphones">
              <Earphones />
            </Route>

            <Route exact path="/earphones/yx1wirelessearphones">
              <Model />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
