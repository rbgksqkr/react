import SelectSort from "./SelectSort";
import TodoInsert from "./TodoInsert";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onInsert, onToggle, onRemove, onSelect }) => {
  return (
    <div className="todo-list">
      <h1>Todo-List</h1>
      <TodoInsert onInsert={onInsert} />
      <SelectSort onSelect={onSelect} />
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
