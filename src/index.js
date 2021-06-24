import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    h1: {
      [defaultTheme.breakpoints.down("lg")]: {
        fontSize: "50px",
      },
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "72px",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App theme={theme}/>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();