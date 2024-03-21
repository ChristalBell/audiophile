import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(0, 0%, 10%)",
        light: "hsl(0, 0%, 98%)",
        dark: "hsl(0, 0%, 94%)",
        contrastText: "hsl(0, 0%, 47%)",
      },
      secondary: {
        main: "hsl(24, 66%, 55%)",
        contrastText: "hsl(0, 0%, 100%)",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        {/* <Products /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
