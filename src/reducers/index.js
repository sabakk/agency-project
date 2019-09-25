import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import positions from "./positions";

const rootReducer = combineReducers({
  user,
  users,
  positions
});
export default rootReducer;
