import { combineReducers } from "redux";
import { noteReducer } from "./notereducers";



export const rootReducer = combineReducers({
    noteReducer,
})