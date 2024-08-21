import { combineReducers } from "redux";
import todos from "../modules/todos";
import { createStore } from "redux";

const rootReducer = combineReducers({
  todos: todos,
});

const store = createStore(rootReducer);
export default store;
