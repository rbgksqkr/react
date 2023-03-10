import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "react hooks",
      checked: true,
    },
    {
      id: 2,
      text: "next.js",
      checked: false,
    },
    {
      id: 3,
      text: "브라우저 렌더링 과정 이해하기",
      checked: false,
    },
  ],
};

let id = 4;
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    insert: (state, action) => {
      const todo = {
        id: id++,
        text: action.payload,
        checked: false,
      };
      return { ...state, todos: state.todos.concat(todo) };
    },
    toggle: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, checked: !todo.checked }
            : todo;
        }),
      };
    },
    remove: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
    increase: (state) => {
      const newTodos = state.todos.slice().sort(function (a, b) {
        if (a.text > b.text) return 1;
        if (a.text < b.text) return -1;
        return 0;
      });
      return { todos: newTodos };
    },
    decrease: (state) => {
      const newTodos = state.todos.slice().sort(function (a, b) {
        if (a.text < b.text) return 1;
        if (a.text > b.text) return -1;
        return 0;
      });
      return { todos: newTodos };
    },
    finished: (state) => {
      const newTodos = state.todos.slice().sort(function (a, b) {
        return b.checked - a.checked;
      });
      return { todos: newTodos };
    },
  },
});

export const { insert, toggle, remove, increase, decrease, finished } =
  todoSlice.actions;
export default todoSlice;
