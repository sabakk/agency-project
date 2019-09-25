import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPositions } from "../../actions/positionsAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "../HOC/Title";
import { TextField } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const positions = useSelector(state => state.positions.position);
  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  const fileUpload = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    setFieldValue("file", file);
  };

  const formPositions = positions
    ? positions.map((position, index) => (
        <MenuItem key={position.id} value={position.name}>
          {position.name}
        </MenuItem>
      ))
    : null;

  return (
    <Container>
      <Title>Register to get a work</Title>
      <Typography variant="h6" align="center" className={styles.subheader}>
        Attention! After successful registration and alert, update the list of
        users in the block from the top{" "}
      </Typography>
      <Formik
        initialValues={{
          email: "",
          positions: "",
          firstName: "",
          file: ""
        }}
        onSubmit={(values, actions) => {
          console.log({
            fileName: values.file.name,
            type: values.file.type,
            size: `${values.file.size} bytes`
          });
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item xs={12} sm={4}>
                <Field
                  name="email"
                  label="Email"
                  type="text"
                  component={TextField}
                  variant="outlined"
                  // margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  component={TextField}
                  variant="outlined"
                  // margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  component={TextField}
                  // margin="dense"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  select
                  name="positions"
                  label="positions"
                  type="text"
                  component={TextField}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  className={styles.select}
                >
                  {formPositions}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  // component={SimpleFileUpload}
                  // component={ImageUpload}
                  name="file"
                  type="file"
                  id="contained-button-file"
                  className={styles.file_hide}
                  // onChange={event => {
                  //   setFieldValue("file", event.currentTarget.files[0]);
                  // }}
                  onChange={event => fileUpload(event, setFieldValue)}
                />

                <label
                  htmlFor="contained-button-file"
                  className={styles.file_wrapper}
                >
                  <div
                    variant="outlined"
                    // size="large"
                    component="span"
                    className={styles.file_name}
                  >
                    {values.file.name ? values.file.name : "Upload"}
                  </div>
                  <Button
                    variant="outlined"
                    // size="large"
                    component="span"
                    className={styles.file_upload}
                  >
                    Upload
                  </Button>
                </label>
                {/* {values.file.size > 1000 ? <div>"fuck"</div> : null} */}
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
