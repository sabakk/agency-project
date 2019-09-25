import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Title.module.scss";

function Title(props) {
  return (
    <div>
      <Typography
        variant="h1"
        gutterBottom
        align="center"
        className={styles.title}
      >
        {props.children}
      </Typography>
    </div>
  );
}

export default Title;
