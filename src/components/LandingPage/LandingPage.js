import React from "react";

import SocialItems from "../UI/SocialItems/SocialItems";

import { portfolio } from "../../portfolio-manifest.json";

import styles from "./LandingPage.module.css";

import { CardContent, Card, Typography, Box, Fade } from "@material-ui/core";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  name: {
    fontWeight: "600",
    paddingBottom: "30px",
    color: "#FFF",
  },
  card: {
    flex: '20% 0',
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    color: "#FFF",
    borderRadius: "30px",
    verticalAlign: "middle",
    textAlign: "center",
    padding: "30px",
    minWidth: "350px",
  }
});

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <Fade in timeout={2000}>
      <Box className={styles.LandingPage} id="home">
        <ThemeProvider theme={props.theme}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h1" align="center" className={classes.name}>
              {portfolio.landingpage_title}
            </Typography>
          </CardContent>
          <SocialItems />
        </Card>
        </ThemeProvider>
      </Box>
    </Fade>
  );
};

export default LandingPage;