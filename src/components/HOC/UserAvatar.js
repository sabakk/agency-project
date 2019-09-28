import React from "react";
import { Typography, Tooltip, Avatar } from "@material-ui/core";
import { ReactComponent as Out } from "../../resourses/icons/sign-out.svg";
import styles from "./UserAvatar.module.scss";

const UserAvatar = ({ avatar: { name = "", email = "", photo = "" } }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <Typography variant="h6" gutterBottom className={styles.name}>
          {name && name}
        </Typography>
        <Tooltip title={email}>
          <Typography
            variant="subtitle1"
            noWrap
            gutterBottom
            className={styles.email}
          >
            {email && email}
          </Typography>
        </Tooltip>
      </div>
      <Avatar alt="Remy Sharp" src={photo && photo} className={styles.avatar} />
      <div className={styles.icon}>
        <Out />
      </div>
    </div>
  );
};
export default UserAvatar;
