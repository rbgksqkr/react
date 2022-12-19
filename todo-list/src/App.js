import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트",
      checked: false,
    },
    {
      id: 2,
      text: "가나",
      checked: true,
    },
    {
      id: 3,
      text: "Server Side Rendering",
      checked: false,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onIncrease = () => {
    const newArray = todos.slice().sort(function (a, b) {
      if (a.text > b.text) return 1;
      if (a.text < b.text) return -1;
      return 0;
    });
    setTodos(newArray);
  };

  const onDecrease = () => {
    const newArray = todos.slice().sort(function (a, b) {
      if (a.text < b.text) return 1;
      if (a.text > b.text) return -1;
      return 0;
    });
    setTodos(newArray);
  };

  const onFinished = () => {
    const newArray = todos.slice().sort(function (a, b) {
      return b.checked - a.checked;
    });
    setTodos(newArray);
  };

  const [selected, setSelected] = useState("increase");
  const onSelect = (value) => {
    setSelected(value);
  };
  return (
    <div>
      <TodoList
        todos={todos}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onFinished={onFinished}
        onSelect={onSelect}
      />
    </div>
  );
}

export default App;
