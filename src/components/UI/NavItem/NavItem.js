import React from "react";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navitem: {
    margin: "6px",
    padding: "6px",
    textTransform: "uppercase",
    color: "#FFF",
    fontSize: "14px",
    letterSpacing: "2px",
    fontWeight: "600",
  },
});

const NavItem = (props) => {
  const classes = useStyles();
  return <Button className={classes.navitem}>{props.text}</Button>;
};

export default NavItem;
