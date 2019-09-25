import React from "react";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import Title from "../HOC/Title";
import about from "../../resourses/imgs/man-mobile.svg";
import styles from "./About.module.scss";

const About = () => {
  return (
    <Container className={styles.container}>
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
            <Typography variant="h6" gutterBottom className={styles.title}>
              I am cool frontend developer
            </Typography>
            <Typography variant="h6" gutterBottom className={styles.text}>
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
            <Button className={styles.button}>Sign Up</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
