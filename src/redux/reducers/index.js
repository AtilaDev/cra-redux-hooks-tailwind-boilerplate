import { combineReducers } from "redux";
import dummyReducer from "./dummyReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  dummy: dummyReducer,
  users: usersReducer
});
