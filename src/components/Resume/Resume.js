import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import { Box } from "@material-ui/core";

import classes from "./Resume.module.css";

import WorkExperienceCard from "../UI/WorkExperienceCard/WorkExperienceCard";

function Resume(props) {
  return (
    <Box className={classes.Resume} id="resume">
      <Box className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <Box className={classes.ResumeWrapperTitle}>Education</Box>
        <Box className={classes.ResumeWrapperBody}>
          <WorkExperienceCard resumeData={portfolio.resume.education} />
        </Box>
      </Box>
      <Box className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <Box className={classes.ResumeWrapperTitle}>Work</Box>
        <Box className={classes.ResumeWrapperBody}>
          <WorkExperienceCard resumeData={portfolio.resume.work} />
        </Box>
      </Box>
    </Box>
  );
}

export default Resume;
