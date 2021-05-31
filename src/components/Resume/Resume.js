import React from "react";

import { portfolio } from "../../portfolio-manifest.json";

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  Link,
  IconButton,
  Typography,
} from "@material-ui/core";

import LinkIcon from "@material-ui/icons/Link";

import styles from "./Resume.module.css";

import WorkExperienceCard from "../UI/WorkExperienceCard/WorkExperienceCard";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "70%",
    margin: "0 auto",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
}));

function Resume(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={styles.Resume} id="resume">
        <Box
          className={
            props.isMobile
              ? styles.ResumeWrapperMobile
              : styles.ResumeWrapperDesktop
          }
        >
          <Box className={styles.ResumeWrapperTitle}>Education</Box>
          <Box className={styles.ResumeWrapperBody}>
            <WorkExperienceCard resumeData={portfolio.resume.education} />
          </Box>
        </Box>
        <Box
          className={
            props.isMobile
              ? styles.ResumeWrapperMobile
              : styles.ResumeWrapperDesktop
          }
        >
          <Box className={styles.ResumeWrapperTitle}>Work</Box>
          <Box className={styles.ResumeWrapperBody}>
            <WorkExperienceCard resumeData={portfolio.resume.work} />
          </Box>
        </Box>
      </Box>

      <Box className={classes.gridContainer}>
        <Typography variant="h4" gutterBottom="true">
          Projects
        </Typography>
        <GridList spacing={6} cellHeight={300} className={classes.gridList}>
          {portfolio.projects.map((project) => {
            return (
              <GridListTile
                cols={!props.isMobile ? 1 : 2}
                key={project.image_preview}
                styles
              >
                <img src={project.image_preview} alt={project.description} />
                <GridListTileBar
                  title={project.name}
                  subtitle={`${project.description}`}
                  actionIcon={
                    <IconButton aria-label={`info about ${project.name}`}>
                      <Link href={project.project_link}>
                        <LinkIcon />
                      </Link>
                    </IconButton>
                  }
                />
              </GridListTile>
            );
          })}
        </GridList>
      </Box>
    </React.Fragment>
  );
}

export default Resume;
