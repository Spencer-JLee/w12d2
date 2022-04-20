import { combineReducers } from "redux";
import { filterReducer } from "./filters";

const uiReducer = combineReducers({
    filters: filterReducer
})

export default uiReducer;