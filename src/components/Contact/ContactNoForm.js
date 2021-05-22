import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import { Typography, Link, Box} from "@material-ui/core";

import MailIcon from "@material-ui/icons/Mail";

import classes from "./Contact.module.css";

function ContactNoForm() {
  return (
    <Box className={classes.Contact} id="contact">
      <Box className={classes.ContactWrapper}>
        <MailIcon
          style={{
            fontSize: "80px",
          }}
        />
        <Box className={classes.ContactMeDescription}>
          {portfolio.contact_me_description}
        </Box>
        <Box className={classes.ContactNoFormLink}>
          <Typography>
            <Link
              color="secondary"
              underline="always"
              href={`mailto:${portfolio.email_address}`}
            >
              Contact Me.
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactNoForm;
