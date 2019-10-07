import React from "react";
import { Typography, Tooltip, Avatar } from "@material-ui/core";
import { ReactComponent as Out } from "../../resourses/icons/sign-out.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

import styles from "./UserAvatar.module.scss";

const UserAvatar = () => {
  const dispatch = useDispatch();
  const avatar = useSelector(state => state.user.avatar);
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <Tooltip title={avatar.name || "name"}>
          <Typography variant="h6" noWrap gutterBottom className={styles.name}>
            {avatar.name && avatar.name}
          </Typography>
        </Tooltip>
        <Tooltip title={avatar.email || "email"}>
          <Typography
            variant="subtitle1"
            noWrap
            gutterBottom
            className={styles.email}
          >
            {avatar.email && avatar.email}
          </Typography>
        </Tooltip>
      </div>
      {avatar.name ? (
        <Avatar
          alt="Remy Sharp"
          src={avatar.photo && avatar.photo}
          className={styles.avatar}
        />
      ) : null}
      <div className={avatar.name ? styles.logout : styles.logout_disable}>
        <Out onClick={() => dispatch(logout())} />
      </div>
    </div>
  );
};
export default UserAvatar;
