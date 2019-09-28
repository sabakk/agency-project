import React from "react";
import { Avatar, Typography, Tooltip } from "@material-ui/core";

import styles from "./User.module.scss";

const User = ({ user: { photo, name, position, email, phone } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Avatar src={photo} />
      </div>

      <div className={styles.wrapper}>
        <Typography variant="h6" className={styles.name}>
          {name}
        </Typography>
        <Typography variant="body1" className={styles.info}>
          {position}
        </Typography>
        <Tooltip title={email}>
          <Typography variant="body1" className={styles.info} noWrap>
            {email}
          </Typography>
        </Tooltip>

        <Typography variant="body1" className={styles.info}>
          {phone}
        </Typography>
      </div>
    </div>
  );
};

export default User;
