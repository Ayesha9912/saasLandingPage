import { combineReducers } from "redux";
import { Reducers } from "./Reducer";

const AllReducers = combineReducers({
    button : Reducers
})

export default AllReducers;