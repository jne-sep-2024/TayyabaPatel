import { configureStore } from "@reduxjs/toolkit";
import reducer, { addTodo, removeTodo } from "../Features/Todos/TodoSlice";

export const store = configureStore({
  reducer: reducer,
});
