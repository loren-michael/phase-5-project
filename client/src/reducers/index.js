import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  itemsReducer: itemsReducer,
  usersReducer: usersReducer
})