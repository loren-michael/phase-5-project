import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import usersReducer from "./usersReducer";
import sessionsReducer from './sessionsReducer';
import cartsReducer from './cartsReducer';

export default combineReducers({
  items: itemsReducer,
  usersReducer: usersReducer,
  sessions: sessionsReducer,
  carts: cartsReducer,
})