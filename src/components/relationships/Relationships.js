import React from "react";
import { Grid, Container, Typography, Hidden } from "@material-ui/core";
import Title from "../HOC/Title";

import { ReactComponent as Html } from "../../resourses/imgs/html.svg";
import { ReactComponent as Css } from "../../resourses/imgs/css.svg";
import { ReactComponent as Javascript } from "../../resourses/imgs/javascript.svg";
import styles from "./Relationships.module.scss";

const Relationships = () => {
  return (
    <Container className={styles.container}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Grid item xs={12} className={styles.main_title}>
            <Title>
              About my relationships with{" "}
              <Hidden xsDown>
                <br />
              </Hidden>{" "}
              web-development
            </Title>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className={styles.inner_grid}>
            <div className={styles.img}>
              <Html />
            </div>
            <div className={styles.wrapper_text}>
              <Typography variant="h6" className={styles.title_text}>
                I'm in love with HTML
              </Typography>
              <Typography variant="body1" className={styles.body_text}>
                Hypertext Markup Language (HTML) is the standard markup language
                for creating web pages and web applications.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={`${styles.inner_grid} ${styles.inner_next_grid}`}>
            <div className={styles.img}>
              <Css />
            </div>
            <div className={styles.wrapper_text}>
              <Typography variant="h6" className={styles.title_text}>
                Css is my best frien
              </Typography>
              <Typography variant="body1" className={styles.body_text}>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language like HTML.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.inner_grid}>
            <div className={styles.img}>
              <Javascript />
            </div>
            <div className={styles.wrapper_text}>
              <Typography variant="h6" className={styles.title_text}>
                Javascript is my passion
              </Typography>
              <Typography variant="body1" className={styles.body_text}>
                JavaScript is a high-level, interpreted programming language. It
                is a language which is also characterized as dynamic, weakly
                typed, prototype-based and multi-paradigm.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Relationships;
