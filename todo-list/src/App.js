import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트",
      checked: true,
    },
    {
      id: 2,
      text: "리덕스",
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

  return (
    <div>
      <TodoList todos={todos} onInsert={onInsert} onToggle={onToggle} />
    </div>
  );
}

export default App;
