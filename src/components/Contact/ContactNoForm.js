import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import { Typography, Link } from "@material-ui/core";

import MailIcon from "@material-ui/icons/Mail";

import classes from "./Contact.module.css";

function ContactNoForm() {
  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactWrapper}>
        <MailIcon
          style={{
            fontSize: "80px",
          }}
        />
        <div className={classes.ContactMeDescription}>
          {portfolio.contact_me_description}
        </div>
        <div className={classes.ContactNoFormLink}>
          <Typography>
            <Link
              color="secondary"
              underline="always"
              href={`mailto:${portfolio.email_address}`}
            >
              Contact Me.
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ContactNoForm;
