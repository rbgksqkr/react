import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트",
      clicked: true,
    },
    {
      id: 2,
      text: "리덕스",
      clicked: true,
    },
    {
      id: 3,
      text: "Server Side Rendering",
      clicked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      clicked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  return (
    <div>
      <TodoList todos={todos} onInsert={onInsert} />
    </div>
  );
}

export default App;
