import React, { useState, useEffect } from "react";

import Navbar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import ContactNoForm from "./components/Contact/ContactNoForm";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/UI/ScrollToTop/ScrollToTop";

import Loader from "react-loader-spinner";

import { portfolio } from "./portfolio-manifest.json";

import { Box, Fab } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles({
  App: {
    height: "100%",
    backgroundColor: '#000'
  },
  Loader: {
    height: "100%",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const [loading, setLoading] = useState(true);

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

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener("resize", () => setResponsiveness()); //Event listener on page resize
  }, []);

  const handleDrawerOpen = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  };

  const handleDrawerClose = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  };

  return loading ? (
    <Box className={classes.Loader}>
      <Loader type="ThreeDots" color="#FFF" height={80} width={80} />
    </Box>
  ) : (
    <Box className={classes.App}>
      <Navbar
        mobileView={mobileView}
        drawerOpen={drawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <LandingPage isMobile={mobileView} theme={props.theme} />
      <About mobileView={mobileView} />
      <Resume isMobile={mobileView} />
      {portfolio.display_email_form ? <Contact /> : <ContactNoForm />}
      <Footer />
      <ScrollToTop {...props}>
        <Fab
          color="secondary"
          size="medium"
          aria-label="scroll back to the top of the page"
        >
          <KeyboardArrowUpIcon color="primary" />
        </Fab>
      </ScrollToTop>
    </Box>
  );
};

export default App;
