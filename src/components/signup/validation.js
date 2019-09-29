import * as Yup from "yup";

const phoneRegExp = /^\+?3?8?(0\d{9})$/;
const sizeInBytes = 5 * 1024 * 1024;
const format = ["image/jpg", "image/jpeg"];

const validation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(60, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  position_id: Yup.number().required("Required"),
  photo: Yup.mixed()
    .required("Required")
    .test(
      "fileSize",
      "File Size is too large",
      value => value && value.size <= sizeInBytes
    )
    .test("fileType", "Unsupported File Format", value =>
      format.includes(value.type)
    )
});

export default validation;
