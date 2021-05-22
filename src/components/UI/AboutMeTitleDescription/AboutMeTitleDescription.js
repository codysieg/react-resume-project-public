import React from "react";

import { Box } from "@material-ui/core";

import classes from "./AboutMeTitleDescription.module.css";

function AboutMeTitleDescription(props) {
  let CSSClasses = [];
  CSSClasses.push(props.isMobile ? "isMobile" : null);
  return (
    <Box className={classes.AboutMeTitleDescription}>
      <Box className={classes.AboutTitle}>{props.title}</Box>
      <Box className={classes.AboutBody}>
        {props.title === "About Me" ? (
          <React.Fragment>
            <Box>{props.body}</Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box>{props.name}</Box>
            <Box>{props.location}</Box>
            <Box>{props.phoneNumber}</Box>
            <Box>
              <a href={"mailto:" + props.emailAddress}>{props.emailAddress}</a>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}

export default AboutMeTitleDescription;
