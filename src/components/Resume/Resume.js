import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import classes from "./Resume.module.css";

import WorkExperienceCard from "../UI/WorkExperienceCard/WorkExperienceCard";

function Resume(props) {
  return (
    <div className={classes.Resume} id="resume">
      <div className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <div className={classes.ResumeWrapperTitle}>Education</div>
        <div className={classes.ResumeWrapperBody}>
          <WorkExperienceCard resumeData={portfolio.resume.education} />
        </div>
      </div>
      <div className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <div className={classes.ResumeWrapperTitle}>Work</div>
        <div className={classes.ResumeWrapperBody}>
          <WorkExperienceCard resumeData={portfolio.resume.work} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
