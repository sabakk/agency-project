import React from "react";
import { scroller } from "react-scroll";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import styles from "./Header.module.scss";

const scrollToElement = element => {
  scroller.scrollTo(element, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -65
  });
};

const Header = () => {
  return (
    <section className={styles.header_banner}>
      <Container>
        <Grid item xs={12} sm={7} className={styles.wrapper}>
          <Typography variant="h1" gutterBottom className={styles.title}>
            Test assignment for Frontend Developer position
          </Typography>
          <Typography variant="body1" gutterBottom className={styles.text}>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.{" "}
            <span className={styles.hide}>
              Please be patient, we consider and respond to every application
              that meets minimum requirements. We look forward to your
              submission. Good luck!
            </span>
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => scrollToElement("Sign up")}
            className={styles.button}
          >
            Sign up
          </Button>
        </Grid>
      </Container>
    </section>
  );
};

export default Header;
