import React from "react";

import styles from "./SideDrawer.module.css";

import { Box } from "@material-ui/core";

import Navigation from "../../Navigation/Navigation";

const SideDrawer = (props) => {
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];

    //TODO: prevent scrolling when the SideDrawer is open.
    // document.body.style.overflow = 'hidden';
    // document.body.style.paddingRight = '15px'; /* Avoid width reflow */
  } else {
    //TODO: prevent scrolling when the SideDrawer is open.
    // document.body.style.overflow = 'unset';
    // document.body.style.paddingRight = '0'; /* Avoid width reflow */
  }
  return (
    <Box>
      <Box className={attachedStyles.join(" ")} onClick={props.closed}>
        <nav className={styles.MobileNavBar}>
          <Navigation />
        </nav>
      </Box>
    </Box>
  );
};

export default SideDrawer;
