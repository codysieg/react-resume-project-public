import React from "react";

import classes from "./AboutMeTitleDescription.module.css";

function AboutMeTitleDescription(props) {
  let CSSClasses = [];
  CSSClasses.push(props.isMobile ? "isMobile" : null);
  return (
    <div className={classes.AboutMeTitleDescription}>
      <div className={classes.AboutTitle}>{props.title}</div>
      <div className={classes.AboutBody}>
        {props.title === "About Me" ? (
          <React.Fragment>
            <div>{props.body}</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>{props.name}</div>
            <div>{props.location}</div>
            <div>{props.phoneNumber}</div>
            <div>
              <a href={"mailto:" + props.emailAddress}>{props.emailAddress}</a>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default AboutMeTitleDescription;
