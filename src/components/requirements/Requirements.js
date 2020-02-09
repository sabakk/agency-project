import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Title from "../HOC/Title";

import requirements from "../../resourses/imgs/man-laptop-v1.svg";
import styles from "./Requirements.module.scss";

const Requirements = () => {
  return (
    <section className={styles.requirements_bg}>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} className={styles.order_title}>
            <Title white>General requirements for the test task</Title>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" className={styles.body_text}>
              Users want to find answers to their questions quickly and data
              shows that people really care about how quickly their pages load.
              The Search team announced speed would be a ranking signal for
              desktop searches in 2010 and as of this month (July 2018), page
              speed will be a ranking factor for mobile searches too.
            </Typography>
            <Typography variant="body1" className={styles.body_text}>
              If you're a developer working on a site, now is a good time to
              evaluate your performance using our speed tools. Think about how
              performance affects the user experience of your pages and consider
              measuring a variety of real-world user-centric performance
              metrics.
            </Typography>
            <Typography variant="body1" className={styles.body_text}>
              Are you shipping too much JavaScript? Too many images? Images and
              JavaScript are the most significant contributors to the page
              weight that affect page load time based on data from HTTP Archive
              and the Chrome User Experience Report - our public dataset for key
              UX metrics as experienced by Chrome users under real-world
              conditions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.order_img}>
            <div className={styles.requirements_img}>
              <img src={requirements} alt="requirements" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Requirements;
