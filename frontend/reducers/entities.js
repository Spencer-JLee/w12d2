import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { benchesReducer } from "./benches";

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchesReducer
});

export default entitiesReducer;