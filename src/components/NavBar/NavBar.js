import React from "react";

import Navigation from "../Navigation/Navigation";
import SideDrawer from "./SideDrawer/SideDrawer";

import { AppBar, Toolbar, IconButton } from "@material-ui/core";

import { Menu } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Navbar: {
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
  },
  MobileNavBar: {
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    display: "flex",
  },
});

const NavBar = (props) => {
  const classes = useStyles();

  const desktopViewJSX = () => {
    return (
      <AppBar position="fixed" className={classes.Navbar}>
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>
    );
  };

  const mobileViewJSX = () => {
    return (
      <AppBar position="fixed" className={classes.MobileNavBar}>
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "primary",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: props.handleDrawerOpen,
            }}
          >
            <Menu />
          </IconButton>
          <SideDrawer
            open={props.drawerOpen}
            closed={props.handleDrawerClose}
          />
        </Toolbar>
      </AppBar>
    );
  };

  return (
    <React.Fragment>
      {props.mobileView ? mobileViewJSX() : desktopViewJSX()}
    </React.Fragment>
  );
};

export default NavBar;
