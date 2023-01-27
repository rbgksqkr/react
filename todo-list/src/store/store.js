import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../reducers/todo";

export const store = configureStore({
  reducer: todoSlice,
});
