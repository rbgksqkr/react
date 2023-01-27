import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import todoSlice from "../reducers/todo";

export const store = configureStore({
  reducer: todoSlice,
  // middleware: [...middlewares]
});
