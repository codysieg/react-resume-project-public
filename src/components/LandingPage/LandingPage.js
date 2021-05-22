import React from "react";

import SocialItems from "../UI/SocialItems/SocialItems";

import { portfolio } from "../../portfolio-manifest.json";

import styles from "./LandingPage.module.css";

import { Card, CardContent, Typography, Box } from "@material-ui/core";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Name: {
    fontWeight: "600",
    paddingBottom: "30px",
  },
  Card: {
    flex: '50% 0',
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    color: "#FFF",
    borderRadius: "30px",
    verticalAlign: "middle",
    textAlign: "center",
    marginTop: "70px",
    marginBottom: "70px",
    minWidth: "350px",
  }
});

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <Box className={styles.LandingPage} id="home">
      <ThemeProvider theme={props.theme}>
        <Card className={classes.Card}>
          <CardContent>
            <Typography variant="h1" align="center" className={classes.Name}>
              {portfolio.landingpage_title}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              display="block"
              style={{fontSize: props.isMobile ? '16px' : '18px'}}
              className={classes.Description}
            >
              {portfolio.landingpage_description}
            </Typography>
          </CardContent>
          <SocialItems />
        </Card>
      </ThemeProvider>
    </Box>
  );
};

export default LandingPage;
