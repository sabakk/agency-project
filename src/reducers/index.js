import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import positions from "./positions";
import alert from "./alert";

const rootReducer = combineReducers({
  user,
  users,
  positions,
  alert
});
export default rootReducer;
