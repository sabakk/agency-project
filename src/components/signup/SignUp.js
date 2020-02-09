import React, { useEffect, useState } from "react";
import { createTextMask } from "redux-form-input-masks";
import { useDispatch, useSelector } from "react-redux";
import { getPositionInit } from "../../actions/positionsAction";
import { registerInit } from "../../actions/registerAction";

import Title from "../HOC/Title";
import { renderTextField, renderSelectField, renderFileField } from "./Inputs";
import validate from "./validation";

import { Field, reduxForm } from "redux-form";
import {
  MenuItem,
  Typography,
  Button,
  Container,
  Grid
} from "@material-ui/core";
import styles from "./SignUp.module.scss";

const SignUp = props => {
  const { handleSubmit, pristine, submitting, valid, reset } = props;

  const dispatch = useDispatch();
  const positions = useSelector(state => state.positions.position);
  useEffect(() => {
    dispatch(getPositionInit());
  }, [dispatch]);

  const phoneMask = createTextMask({
    pattern: "+380999999999",
    stripMask: false
  });

  const formPositions = positions
    ? positions.map(position => (
        <MenuItem key={position.id} value={position.id}>
          {position.name}
        </MenuItem>
      ))
    : "Data loading";
  const [spacing] = useState(2);

  const submit = values => {
    let FormFied = new FormData();
    FormFied.append("name", values.name);
    FormFied.append("email", values.email);
    FormFied.append("phone", values.phone);
    FormFied.append("position_id", values.position_id);
    FormFied.append("photo", values.photo);

    dispatch(registerInit(FormFied));
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={spacing}
        >
          <Grid item xs={12}>
            <Title>Register to get a work</Title>
            <Typography
              variant="h6"
              align="center"
              className={styles.subheader}
            >
              Attention! After successful registration and alert, update the
              list of users in the block from the top
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} className={styles.field}>
            <Field
              name="name"
              label="Name"
              placeholder="Your name"
              type="text"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12} sm={4} className={styles.field}>
            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="Your email"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12} sm={4} className={styles.field}>
            <Field
              name="phone"
              label="Phone"
              placeholder="+38 (___) ___ __ __"
              type="phone"
              variant="outlined"
              component={renderTextField}
              {...phoneMask}
            />
          </Grid>

          <Grid item xs={12} sm={6} className={styles.field}>
            <Field
              name="position_id"
              placeholder="Select your position"
              label="Select your position"
              type="text"
              component={renderSelectField}
            >
              {formPositions}
            </Field>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.field}>
            <Field name="photo" type="file" component={renderFileField} />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.btn_block}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={!valid || pristine || submitting}
                className={styles.btn}
              >
                Sign Up
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: "registration",
  validate
})(SignUp);
