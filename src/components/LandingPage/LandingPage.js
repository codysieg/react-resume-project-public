import React from "react";

import SocialItems from "../UI/SocialItems/SocialItems";

import { portfolio } from "../../portfolio-manifest.json";

import styles from "./LandingPage.module.css";

import { Typography, Box } from "@material-ui/core";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  name: {
    fontWeight: "600",
    paddingBottom: "30px",
    color: "#FFF",
  },
});

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <Box className={styles.LandingPage} id="home">
      <ThemeProvider theme={props.theme}>
        <Typography variant="h1" align="center" className={classes.name}>
          {portfolio.landingpage_title}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{ fontSize: props.isMobile ? "16px" : "18px" }}
          className={classes.Description}
        ></Typography>
        <SocialItems />
      </ThemeProvider>
    </Box>
  );
};

export default LandingPage;
