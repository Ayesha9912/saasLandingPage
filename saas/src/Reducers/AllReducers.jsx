import { combineReducers } from "redux";
import { Reducers } from "./Reducer";

const AllReducers = combineReducers({
    Reducer : Reducers
})

export default AllReducers;