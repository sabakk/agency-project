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
        <Typography variant="h6" gutterBottom className={styles.name}>
          {avatar.name && avatar.name}
        </Typography>
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
      {avatar.name ? (
        <div>
          <Out onClick={() => dispatch(logout())} />
        </div>
      ) : null}
    </div>
  );
};
export default UserAvatar;
