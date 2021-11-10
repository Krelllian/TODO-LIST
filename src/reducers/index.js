import addTodo from "./addTodo";
import clearTodo from "./clearTodo";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    tasks: addTodo,
    clearTodo: clearTodo,
})

export default allReducers;