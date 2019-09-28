import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Title.module.scss";

function Title({ children, white }) {
  return (
    <div>
      <Typography
        variant="h1"
        gutterBottom
        align="center"
        className={white ? styles.title_white : styles.title}
      >
        {children}
      </Typography>
    </div>
  );
}

export default Title;
