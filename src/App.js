import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import Earphones from "./components/inner pages/Earphones";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/Footer";
import Headphones from "./components/inner pages/Headphones";
import Speakers from "./components/inner pages/Speakers";

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
          </Switch>
          <Footer />

          {/* <Products /> */}
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
