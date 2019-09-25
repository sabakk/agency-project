import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Out } from "../../resourses/icons/sign-out.svg";
import styles from "./UserAvatar.module.scss";

const UserAvatar = ({ user1 }) => {
  console.log(user1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <Typography variant="h6" gutterBottom className={styles.name}>
          {user1 && user1.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom className={styles.email}>
          {user1 && user1.email}
        </Typography>
      </div>
      <Avatar
        alt="Remy Sharp"
        src={user1 && user1.photo}
        className={styles.avatar}
      />
      <div className={styles.icon}>
        <Out />
      </div>
    </div>
  );
};
export default UserAvatar;
