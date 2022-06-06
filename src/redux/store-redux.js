import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import MessagesPageReducer from "./MessagesPageReducer";

let rootReducer = combineReducers({
    MessagesPage: MessagesPageReducer
})

const store = configureStore({
    reducer: rootReducer, 
})
window.store = store;

export default store;