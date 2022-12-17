import TodoInsert from "./TodoInsert";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <h1>일정관리</h1>
      <TodoInsert />
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
