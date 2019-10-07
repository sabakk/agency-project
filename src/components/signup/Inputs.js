import React from "react";

import { TextField, Button, Typography, Hidden } from "@material-ui/core";
import { ReactComponent as Upload } from "../../resourses/icons/upload.svg";
import styles from "./SignUp.module.scss";

export const renderTextField = ({
  label,
  placeholder,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    InputLabelProps={{
      shrink: true
    }}
    fullWidth
    label={label}
    placeholder={placeholder}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export const renderSelectField = ({
  input,
  placeholder,
  lable,
  meta: { touched, invalid, error },
  children,
  ...custom
}) => (
  <TextField
    select
    variant="outlined"
    fullWidth
    lable={lable}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  >
    {children}
  </TextField>
);

const handleChange = (event, input) => {
  event.preventDefault();
  let imageFile = event.target.files[0];
  if (imageFile) {
    const localImageUrl = URL.createObjectURL(imageFile);
    const imageObject = new window.Image();
    imageObject.onload = () => {
      imageFile.width = imageObject.naturalWidth;
      imageFile.height = imageObject.naturalHeight;
      input.onChange(imageFile);
      input.onBlur(imageFile);
      URL.revokeObjectURL(imageFile);
    };
    imageObject.src = localImageUrl;
  }
};

export const renderFileField = ({ input, meta, ...props }) => {
  return (
    <div>
      <input
        id="contained-button-file"
        className={styles.file_hide}
        onChange={event => handleChange(event, input)}
        type="file"
        {...props.input}
        {...props}
      />

      <label htmlFor="contained-button-file" className={styles.file_wrapper}>
        <div
          variant="outlined"
          component="span"
          className={
            meta && meta.touched && meta.error
              ? styles.file_name_error
              : styles.file_name
          }
        >
          {input.value ? (
            <div className={styles.placeholder}>
              {input.value.name && input.value.name}
            </div>
          ) : (
            <div className={styles.placeholder}>Upload your photo</div>
          )}
        </div>
        <Button
          color="secondary"
          variant="outlined"
          component="span"
          className={styles.file_upload}
        >
          <Hidden xsDown>Upload</Hidden>
          <Hidden smUp>
            <Upload />
          </Hidden>
        </Button>
      </label>
      {meta && meta.touched && meta.error ? (
        <Typography variant="caption" className={styles.upload_text_error}>
          {meta.error}
        </Typography>
      ) : (
        <Typography variant="caption" className={styles.upload_text}>
          File format jpg up to 5 MB, the minimum size of 70x70px
        </Typography>
      )}
    </div>
  );
};
