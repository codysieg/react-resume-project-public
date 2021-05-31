import React, { useState, useRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import axios from "axios";

import { Button, TextField, CircularProgress, Box} from "@material-ui/core";

import MailIcon from "@material-ui/icons/Mail";
import CheckIcon from "@material-ui/icons/Check";

import classes from "./Contact.module.css";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: false,
    },
    email: {
      value: "",
      error: false,
    },
    subject: {
      value: "",
      error: false,
    },
    message: {
      value: "",
      error: false,
    },
  });

  const [requestStatus, setRequestStatus] = useState({
    requestLoading: false,
    success: false,
  });

  const [captchaError, setCaptchaError] = useState(false);

  const recaptchaRef = useRef(null);

  const onCaptchaChange = (error) => {
    setCaptchaError(error);
  };

  const handleInputChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: {
        error: false,
        value: event.target.value,
      },
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    let error = false;

    /* Progress Indicator */
    setRequestStatus({
      requestLoading: true,
      success: false,
    });

    /* Client-Side Validation of the Recaptcha */
    const recaptchaResponse = recaptchaRef.current.getValue();

    if (
      recaptchaResponse === undefined ||
      recaptchaResponse === "" ||
      recaptchaResponse === null
    ) {
      error = true;
      setCaptchaError(true);
    }

    /* Validate the input fields, all are required. Set the error state if any of them do not have any input */
    Object.keys(formValues).forEach((key) => {
      if (
        formValues[key].value === undefined ||
        formValues[key].value === null ||
        formValues[key].value === ""
      ) {
        error = true;
        setFormValues((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            error: true,
          },
        }));
      } else {
        //Validate email
        if (key === "email") {
          // eslint-disable-next-line
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let validEmail = re.test(formValues[key].value);
          if (!validEmail) error = true;
          setFormValues((prevState) => ({
            ...prevState,
            email: {
              ...prevState.email,
              error: !validEmail,
            },
          }));
        } else {
          setFormValues((prevState) => ({
            ...prevState,
            [key]: {
              ...prevState[key],
              error: false,
            },
          }));
        }
      }
    });

    if (error) {
      setRequestStatus({
        requestLoading: false,
        success: false,
      });
    } else {
      let payload = {
        captcha: recaptchaResponse,
        name: formValues.name.value,
        email: formValues.email.value,
        subject: formValues.subject.value,
        message: formValues.message.value,
      };

      axios
        .post("/emailEndPoint", payload)
        .then((res) => {
          /* Progress Indicator */
          setRequestStatus({
            requestLoading: false,
            success: true,
          });

          /* Clear the checkmark after it's been successful after 2s*/
          setTimeout(() => {
            setRequestStatus({
              requestLoading: false,
              success: false,
            });
          }, 2000);

          /* Clear out the input fields */
          for (const key of Object.keys(formValues)) {
            setFormValues((prevState) => ({
              ...prevState,
              [key]: {
                value: "",
                error: false,
              },
            }));
          }
        })
        .catch((err) => {
          setRequestStatus({
            requestLoading: false,
            success: false,
          });
          console.log(err);
        });
    }
  };

  return (
    <Box className={classes.Contact} id="contact">
      <Box className={classes.ContactWrapper}>
        <MailIcon
          style={{
            fontSize: "80px",
          }}
        />
        <form noValidate autoComplete="off">
          <TextField
            required
            id="standard-required"
            label="Name"
            placeholder="Name"
            name="name"
            value={formValues.name.value ? formValues.name.value : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            error={formValues.name.error}
            helperText={formValues.name.error ? "This field is required." : ""}
            color="secondary"
            onChange={handleInputChange}
          />
          <TextField
            required
            id="standard-required"
            label="Email"
            placeholder="Email Address"
            name="email"
            value={formValues.email.value ? formValues.email.value : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            error={formValues.email.error}
            helperText={
              formValues.email.error
                ? "Please enter a valid email address."
                : ""
            }
            color="secondary"
            onChange={handleInputChange}
          />
          <TextField
            required
            id="standard-required"
            label="Subject"
            placeholder="Subject"
            name="subject"
            value={formValues.subject.value ? formValues.subject.value : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            error={formValues.subject.error}
            helperText={
              formValues.subject.error ? "This field is required." : ""
            }
            color="secondary"
            onChange={handleInputChange}
          />
          <TextField
            required
            id="standard-required"
            label="Message"
            placeholder="Message"
            name="message"
            multiline
            value={formValues.message.value ? formValues.message.value : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            rows={4}
            error={formValues.message.error}
            helperText={
              formValues.message.error ? "This field is required." : ""
            }
            color="secondary"
            onChange={handleInputChange}
          />
          <ReCAPTCHA
            className={captchaError ? classes.CaptchaErrorBox : ""}
            ref={recaptchaRef}
            onChange={() => onCaptchaChange(false)}
            onErrored={() => onCaptchaChange(true)}
            onExpired={() => onCaptchaChange(true)}
            sitekey="#yoursitekey"
          />
          <Box className={classes.ButtonAndLoadingStates}>
            <Button
              onClick={handleFormSubmit}
              variant="outlined"
              color="secondary"
            >
              Send
            </Button>
            {requestStatus.requestLoading ? (
              <CircularProgress
                style={{ verticalAlign: "middle", marginLeft: "10px" }}
                color="secondary"
                thickness={2.4}
                size={30}
              />
            ) : null}
            {requestStatus.success ? (
              <CheckIcon
                style={{
                  verticalAlign: "middle",
                  marginLeft: "10px",
                  color: "green",
                }}
                fontSize="large"
              />
            ) : null}
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
