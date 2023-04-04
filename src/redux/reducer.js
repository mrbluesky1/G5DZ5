import {combineReducers} from "redux";
import {numbersReducer} from "./reducers/numbersReducer";

export const rootReducer = combineReducers({
    numbersReducer: numbersReducer,
})