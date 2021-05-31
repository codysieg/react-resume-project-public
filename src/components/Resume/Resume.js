import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Paper, Typography } from "@material-ui/core";

import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

import styles from "./Resume.module.css";

import WorkExperienceCard from "../UI/WorkExperienceCard/WorkExperienceCard";

const useStyles = makeStyles((theme) => ({
  GridContainer: {
    width: "70%",
    margin: "0 auto",
    paddingTop: "50px",
    paddingBottom: "50px",
  },

  paper: {
    height: 300,
    width: 400,
    margin: "0 auto",
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function Resume(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.Resume} id="resume">
        <Box
          className={
            props.isMobile
              ? classes.ResumeWrapperMobile
              : classes.ResumeWrapperDesktop
          }
        >
          <Box className={classes.ResumeWrapperTitle}>Education</Box>
          <Box className={classes.ResumeWrapperBody}>
            <WorkExperienceCard resumeData={portfolio.resume.education} />
          </Box>
        </Box>
        <Box
          className={
            props.isMobile
              ? classes.ResumeWrapperMobile
              : classes.ResumeWrapperDesktop
          }
        >
          <Box className={classes.ResumeWrapperTitle}>Work</Box>
          <Box className={classes.ResumeWrapperBody}>
            <WorkExperienceCard resumeData={portfolio.resume.work} />
          </Box>
        </Box>
      </Box>

      {/* Projects Test with Grid Layout */}
      <Box className={classes.GridContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {portfolio.projects.map((project) => {
            return (
              <Grid item xs>
                <Paper
                  elevation={3}
                  variant="outlined"
                  className={classes.paper}
                >
                  <Typography>{project.name}</Typography>
                  <Typography>{project.description}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Resume;
