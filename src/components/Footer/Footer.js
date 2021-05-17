import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import CopyrightIcon from "@material-ui/icons/Copyright";

import SocialItems from "../UI/SocialItems/SocialItems";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.Footer}>
      <BrowserRouter>
        <HashLink className={classes.FooterArrow} smooth to="#home">
          <ExpandLessIcon color="secondary" style={{ fontSize: "40px" }} />
        </HashLink>
      </BrowserRouter>
      <SocialItems />
      <div className={classes.CopyRight}>
        <CopyrightIcon style={{marginRight: '2px', fontSize: '12px'}}/>
        {portfolio.copyright_info}
      </div>
    </div>
  );
}

export default Footer;
