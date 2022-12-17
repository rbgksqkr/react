import TodoInsert from "./TodoInsert";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onInsert, onToggle }) => {
  return (
    <div className="todo-list">
      <h1>일정관리</h1>
      <TodoInsert todos={todos} onInsert={onInsert} />
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
