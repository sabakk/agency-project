import React from "react";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header_banner}>
      <Container>
        <Grid item xs={12} sm={6} className={styles.wrapper}>
          <Typography variant="h2" gutterBottom className={styles.title}>
            Test assignment for Frontend Developer position
          </Typography>
          <Typography variant="body1" gutterBottom className={styles.text}>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck!
          </Typography>
          <Button variant="contained" className={styles.button}>
            Sign up
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
