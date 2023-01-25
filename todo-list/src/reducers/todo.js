import {
  INSERT,
  TOGGLE,
  REMOVE,
  INCREASE,
  DECREASE,
  FINISHED,
} from "../actions/todo";

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

function todo(state = initialState, action) {
  switch (action.type) {
    case INSERT:
      console.log(state, action);
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        ),
      };
    case REMOVE:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case INCREASE: {
      const newTodos = state.todos.slice().sort(function (a, b) {
        if (a.text > b.text) return 1;
        if (a.text < b.text) return -1;
        return 0;
      });
      return { todos: newTodos };
    }
    case DECREASE:
      const newTodos = state.todos.slice().sort(function (a, b) {
        if (a.text < b.text) return 1;
        if (a.text > b.text) return -1;
        return 0;
      });
      return { todos: newTodos };
    case FINISHED: {
      const newTodos = state.todos.slice().sort(function (a, b) {
        return b.checked - a.checked;
      });
      return { todos: newTodos };
    }
    default:
      return state;
  }
}
export default todo;
