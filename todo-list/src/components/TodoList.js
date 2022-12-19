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
  onSelect,
}) => {
  const onClick = (e) => {
    if (e.target.value === "increase") onIncrease();
    if (e.target.value === "decrease") onDecrease();
    if (e.target.value === "finished") onFinished();
    onSelect(e.target.value);
  };
  return (
    <div className="todo-list">
      <h1>Todo-List</h1>
      <TodoInsert onInsert={onInsert} />
      <div className="btn-list">
        <button onClick={onClick} value="increase">
          오름차순
        </button>
        <button onClick={onClick} value="decrease">
          내림차순
        </button>
        <button onClick={onClick} value="finished">
          완료
        </button>
      </div>

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
