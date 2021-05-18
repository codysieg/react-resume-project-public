import React from "react";

import classes from "./WorkExperienceCard.module.css";

function WorkExperienceCard(props) {
  return props.resumeData.map((element, index) => {
    if (Array.isArray(element)) {
      return element.map((job, id) => {
        return (
          <div className={classes.WorkExperienceCard} key={id}>
            <div className={classes.WorkExperienceTitle}>{job.name}</div>
            <div className={classes.WorkExperiencePositionAndTimeFrame}>
              {job.position}
              <span className={classes.DotSeparator}>•</span>
              {job.timeframe}
            </div>
            <div className={classes.WorkExperienceDescription}>
              {job.description}
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className={classes.WorkExperienceCard} key={index}>
          <div className={classes.WorkExperienceTitle}>{element.name}</div>
          <div className={classes.WorkExperiencePositionAndTimeFrame}>
            {element.position}
            <span className={classes.DotSeparator}>•</span>
            {element.timeframe}
          </div>
          <div className={classes.WorkExperienceDescription}>
            {element.description}
          </div>
        </div>
      );
    }
  });
}

export default WorkExperienceCard;
