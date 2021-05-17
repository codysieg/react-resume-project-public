import React from "react";

import SocialItems from "../UI/SocialItems/SocialItems";

import { portfolio } from "../../portfolio-manifest.json";

import styles from "./LandingPage.module.css";

import { Card, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  name: {
    fontWeight: "600",
    paddingBottom: "30px",
  },
  card: {
    flex: '50% 0',
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    color: "#FFF",
    borderRadius: "30px",
    verticalAlign: "middle",
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    minWidth: "350px",
  }
});

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <div className={styles.LandingPage} id="home">
      <ThemeProvider theme={props.theme}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h1" align="center" className={classes.name}>
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
    </div>
  );
};

export default LandingPage;
