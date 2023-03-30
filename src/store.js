import { createStore } from "redux";
import todosReducer from "./todosReducer"
//CREAR REDUCER

const store = createStore(todosReducer); 

export default store;