import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";

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

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
