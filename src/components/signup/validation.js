const phoneRegExp = /^\+?3?8?(0\d{9})$/;
const sizeInBytes = 5 * 1024 * 1024;
const format = ["image/jpg", "image/jpeg"];
const widthInPx = 70;
const heightInPx = 70;

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 60) {
    errors.name = "Must be 60 characters or less";
  } else if (values.name.length < 2) {
    errors.name = "Must be 2 characters or more";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!phoneRegExp.test(values.phone)) {
    errors.phone = "Phone number is not valid";
  }
  if (!values.position_id) {
    errors.position_id = "Required";
  }
  if (!values.photo) {
    errors.photo = "File format jpg up to 5 MB, the minimum size of 70x70px";
  } else if (values.photo.size > sizeInBytes) {
    errors.photo = "File Size is too large";
  } else if (!format.includes(values.photo.type)) {
    errors.photo = "Unsupported File Format";
  } else if (values.photo.height < heightInPx) {
    errors.photo = "File height is too small";
  } else if (values.photo.width < widthInPx) {
    errors.photo = "File width is too small";
  }
  return errors;
};

export default validate;
