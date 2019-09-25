import React from "react";
import { Avatar, Typography } from "@material-ui/core";

import styles from "./User.module.scss";

const User = ({ user: { photo, name, position, email, phone } }) => {
  console.log(name);
  return (
    <div className={styles.container}>
      <Avatar src={photo} />
      <div className={styles.wrapper}>
        <Typography>{name}</Typography>
      </div>
    </div>
  );
};

export default User;
