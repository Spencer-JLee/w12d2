import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return Object.assign({}, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}