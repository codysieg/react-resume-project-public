import React from "react";

import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn, Facebook, Instagram} from "@material-ui/icons";

import { portfolio } from "../../../portfolio-manifest.json";

import styles from "./SocialItems.module.css";

function SocialItems() {
  return (
    <div className={styles.SocialItems}>
      <IconButton
        color="primary"
        aria-label="Github Link"
        href={portfolio.social_icon_links.github}
      >
        <GitHub fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="LinkedIn Link"
        href={portfolio.social_icon_links.linkedin}
      >
        <LinkedIn fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Facebook Link"
        href={portfolio.social_icon_links.facebook}
      >
        <Facebook fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Instagram Link"
        href={portfolio.social_icon_links.instagram}
      >
        <Instagram fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SocialItems;
