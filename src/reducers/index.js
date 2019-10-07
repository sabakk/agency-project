import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import user from "./user";
import users from "./users";
import positions from "./positions";
import alert from "./alert";

const rootReducer = combineReducers({
  user,
  users,
  positions,
  alert,
  form: formReducer
});
export default rootReducer;
