import TodoInsert from "./TodoInsert";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  onInsert,
  onToggle,
  onRemove,
  onIncrease,
  onDecrease,
  onFinished,
}) => {
  return (
    <div className="todo-list">
      <h1>Todo-List</h1>
      <TodoInsert onInsert={onInsert} />
      <button onClick={onIncrease}>오름차순</button>
      <button onClick={onDecrease}>내림차순</button>
      <button onClick={onFinished}>완료</button>

      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
