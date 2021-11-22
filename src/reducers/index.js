import tasksReducer from "./tasksReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    tasks: tasksReducer,
})

export default allReducers;