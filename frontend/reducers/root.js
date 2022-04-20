import { SessionReducer } from "./session";
import entitiesReducer from "./entities";
import errorsReducer from "./errors";
import { combineReducers } from "redux";
import uiReducer from "./ui";

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
  errors: errorsReducer,
  filters: uiReducer
});