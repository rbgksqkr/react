import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";
import {
  insert,
  toggle,
  remove,
  increase,
  decrease,
  finished,
} from "../../reducers/todo";

const Todo = () => {
  const todos = useSelector((state) => state.reducer.todos);
  const dispatch = useDispatch();

  const onInsert = (todo) => {
    dispatch(insert(todo));
  };

  const onToggle = (id) => {
    dispatch(toggle(id));
  };

  const onRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <TodoList
      todos={todos}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
      onFinished={() => dispatch(finished())}
    />
  );
};

export default Todo;
