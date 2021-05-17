import React from "react";

import classes from "./Navigation.module.css";

import NavItem from "../UI/NavItem/NavItem";

import { portfolio } from "../../portfolio-manifest.json";

import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <BrowserRouter>
      <HashLink className={classes.NavLink} smooth to="#home">
        <NavItem text={portfolio.link_1.name} />
      </HashLink>
      <HashLink className={classes.NavLink} smooth to="#about">
        <NavItem text={portfolio.link_2.name} />
      </HashLink>
      <HashLink className={classes.NavLink} smooth to="#resume">
        <NavItem text={portfolio.link_3.name} />
      </HashLink>
      <HashLink className={classes.NavLink} smooth to="#contact">
        <NavItem text={portfolio.link_4.name} />
      </HashLink>
    </BrowserRouter>
  );
}

export default Navigation;
