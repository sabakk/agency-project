import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPositions } from "../../actions/positionsAction";
import { register } from "../../actions/registerAction";

import { Formik, Form, Field } from "formik";
import validation from "./validation";
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
    const photo = event.target.files[0];
    if (!photo) {
      return;
    }
    setFieldValue("photo", photo);
  };

  const formPositions = positions
    ? positions.map(position => (
        <MenuItem key={position.id} value={position.id}>
          {position.name}
        </MenuItem>
      ))
    : "Data loading";
  const [spacing] = useState(2);

  return (
    <Container>
      <Title>Register to get a work</Title>
      <Typography variant="h6" align="center" className={styles.subheader}>
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position_id: "",
          photo: {}
        }}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          let FormFied = new FormData();
          FormFied.append("name", values.name);
          FormFied.append("email", values.email);
          FormFied.append("phone", values.phone);
          FormFied.append("position_id", values.position_id);
          FormFied.append("photo", values.photo);

          dispatch(register(FormFied));
          resetForm();
        }}
      >
        {({
          setFieldValue,
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              spacing={spacing}
            >
              <Grid item xs={12} sm={4}>
                <Field
                  name="name"
                  label="Name"
                  placeholder="Your name"
                  type="text"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                {/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Your email"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  name="phone"
                  label="Phone"
                  placeholder="+38 (___) ___ __ __"
                  type="phone"
                  variant="outlined"
                  component={TextField}
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  select
                  name="position_id"
                  label="Select your position"
                  type="text"
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  className={styles.select}
                >
                  {formPositions}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="photo"
                  type="file"
                  id="contained-button-file"
                  className={styles.file_hide}
                  onChange={event => fileUpload(event, setFieldValue)}
                />

                <label
                  htmlFor="contained-button-file"
                  className={styles.file_wrapper}
                >
                  <div
                    variant="outlined"
                    component="span"
                    className={styles.file_name}
                  >
                    {values.photo.name ? (
                      <div className={styles.placeholder}>
                        {values.photo.name}
                      </div>
                    ) : (
                      <div className={styles.placeholder}>
                        Upload your photo
                      </div>
                    )}
                  </div>
                  <Button
                    color="secondary"
                    variant="outlined"
                    component="span"
                    className={styles.file_upload}
                  >
                    Upload
                  </Button>
                </label>
                {touched.photo && errors.photo ? (
                  <Typography
                    variant="caption"
                    className={styles.upload_text_error}
                  >
                    File format jpg up to 5 MB, the minimum size of 70x70px
                  </Typography>
                ) : (
                  <Typography variant="caption" className={styles.upload_text}>
                    File format jpg up to 5 MB, the minimum size of 70x70px
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <div className={styles.btn}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
