// import axios from "axios";
import { REGISTER_INIT } from "./types";
// import { getUsers } from "./userAction";
// import { setAlert } from "./alertAction";

// export const setAuthToken = token => {
//   if (token) {
//     axios.defaults.headers.Token = token;
//   } else {
//     delete axios.defaults.headers.Token;
//   }
// };

export const registerInit = formData => ({
  type: REGISTER_INIT,
  formData
});

// export const registerSuccess = res => ({
//   type: TOKEN_GET,
//   payload: res
// });

// export const registerError = error => ({
//   type: TOKEN_ERROR,
//   payload: error
// });

// export const register = formData => async dispatch => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await await axios.post("users", formData);
//     if (res.success) {
//       dispatch({
//         type: USERS_CLEAR
//       });
//       dispatch(setAlert());
//       dispatch(getUsers(1));
//     } else {
//       console.log(res.message);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
