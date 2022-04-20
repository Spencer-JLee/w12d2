import { UPDATE_BOUNDS } from "../actions/filter_actions";

export const filterReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case UPDATE_BOUNDS:
            return action.filters;
        default:
            return state;
    }
}