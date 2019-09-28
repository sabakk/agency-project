import React, { useState, useEffect } from "react";
import Title from "../HOC/Title";

import { Container, Grid, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/userAction";
import { getSortUsers } from "../../selectors/getSortUsers";
import User from "./User";
import styles from "./Users.module.scss";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(getSortUsers);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);
  return (
    <Container>
      <Title>Our cheerful users</Title>
      <Typography variant="h6" align="center" className={styles.header}>
        Attention! Sorting users by registration date
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {users
          ? users.map(user => (
              <Grid
                item
                xs={12}
                sm={4}
                key={user.id}
                className={styles.user_container}
              >
                <User user={user}></User>
              </Grid>
            ))
          : "loading"}
      </Grid>
      <div className={styles.btn}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setPage(prevPage => prevPage + 1)}
        >
          Show more
        </Button>
      </div>
    </Container>
  );
};

export default Users;
