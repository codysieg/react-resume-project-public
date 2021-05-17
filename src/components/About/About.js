import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import AboutMeTitleDescription from "../UI/AboutMeTitleDescription/AboutMeTitleDescription";
import PortfolioImage from "../UI/PortfolioImage/PortfolioImage";

import classes from "./About.module.css";

function About(props) {
  return (
    <div className={props.mobileView ? classes.AboutMobileView : classes.AboutDesktopView} id="about">
      <div className={classes.AboutPortfolio}>
          <PortfolioImage imageSource={portfolio.image} />
      </div>
      <div className={classes.AboutTitleDescription}>
        <AboutMeTitleDescription
          title="About Me"
          body={portfolio.about_me_description}
          isMobile={props.mobileView}
        />
        <AboutMeTitleDescription
          title="Contact Details"
          name={portfolio.name}
          location={portfolio.location}
          phoneNumber={portfolio.phone_number}
          emailAddress={portfolio.email_address}
          isMobile={props.mobileView}
        />
      </div>
    </div>
  );
}

export default About;
