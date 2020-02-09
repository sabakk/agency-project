import axios from "axios";
// import store from "../store";
// import { SET_ALERT } from "../actions/types";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/";
axios.interceptors.response.use(
  res => {
    // store.dispatch({ type: "SET_ALERT" });
    return res.data;
  },
  err => Promise.reject(err.response.data)
);

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.Token = token;
  } else {
    delete axios.defaults.headers.Token;
  }
};

export const ApiService = {
  getUser() {
    return axios.get("users/1");
  },
  getUsers(page, mediaMatch) {
    return axios.get(`users?page=${page}&count=${mediaMatch}`);
  },
  getPosition() {
    return axios.get("positions");
  },
  getToken() {
    return axios.get("token");
  },
  postRegister(formData) {
    return axios.post("users", formData, setAuthToken(localStorage.token));
  }
};
