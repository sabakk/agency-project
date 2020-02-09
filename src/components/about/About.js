import React from "react";
import { scroller } from "react-scroll";

import { Grid, Container, Typography, Button } from "@material-ui/core";
import Title from "../HOC/Title";
import about from "../../resourses/imgs/man-mobile.svg";
import styles from "./About.module.scss";

const scrollToElement = element => {
  scroller.scrollTo(element, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -65
  });
};

const About = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Title>Let's get acquainted</Title>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={styles.about_img}>
            <img src={about} alt="about" />
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={styles.text_wrapper}>
            <Typography variant="h3" gutterBottom className={styles.title}>
              I am cool frontend developer
            </Typography>
            <Typography variant="body1" gutterBottom className={styles.text}>
              When real users have a slow experience on mobile, they're much
              less likely to find what they are looking for or purchase from you
              in the future. For many sites this equates to a huge missed
              opportunity, especially when more than half of visits are
              abandoned if a mobile page takes over 3 seconds to load.
              <br />
              <br />
              Last week, Google Search and Ads teams announced two new speed
              initiatives to help improve user-experience on the web.
            </Typography>
            <div className={styles.btn_wrapper}>
              <Button
                onClick={() => scrollToElement("Sign up")}
                className={styles.button}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
