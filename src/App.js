import React, { useState, useEffect } from "react";

import styles from "./App.module.css";

import Navbar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import ContactNoForm from "./components/Contact/ContactNoForm";
import Footer from "./components/Footer/Footer";

import { portfolio } from "./portfolio-manifest.json";

import { createMuiTheme } from "@material-ui/core/styles";

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

const App = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({
            ...prevState,
            mobileView: false,
            drawerOpen: false,
          }));
    };
    setResponsiveness(); //Fire on load
    window.addEventListener("resize", () => setResponsiveness()); //Event listener on page resize
  }, []);

  const handleDrawerOpen = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  };

  const handleDrawerClose = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  };

  return (
    <div className={styles.App}>
      <Navbar
        mobileView={mobileView}
        drawerOpen={drawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <LandingPage isMobile={mobileView} theme={theme} />
      <About mobileView={mobileView} />
      <Resume isMobile={mobileView} />
      {portfolio.display_email_form ? <Contact /> : <ContactNoForm />}
      <Footer />
    </div>
  );
};

export default App;
