import React from "react";

import { Box } from "@material-ui/core";

import classes from "./WorkExperienceCard.module.css";

function WorkExperienceCard(props) {
  return props.resumeData.map((element, index) => {
    if (Array.isArray(element)) {
      return element.map((job, id) => {
        return (
          <Box className={classes.WorkExperienceCard} key={id}>
            <Box className={classes.WorkExperienceTitle}>{job.name}</Box>
            <Box className={classes.WorkExperiencePositionAndTimeFrame}>
              {job.position}
              <span className={classes.DotSeparator}>•</span>
              {job.timeframe}
            </Box>
            <Box className={classes.WorkExperienceDescription}>
              {job.description}
            </Box>
          </Box>
        );
      });
    } else {
      return (
        <Box className={classes.WorkExperienceCard} key={index}>
          <Box className={classes.WorkExperienceTitle}>{element.name}</Box>
          <Box className={classes.WorkExperiencePositionAndTimeFrame}>
            {element.position}
            <span className={classes.DotSeparator}>•</span>
            {element.timeframe}
          </Box>
          <Box className={classes.WorkExperienceDescription}>
            {element.description}
          </Box>
        </Box>
      );
    }
  });
}

export default WorkExperienceCard;
