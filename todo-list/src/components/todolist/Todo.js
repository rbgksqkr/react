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

// const mapStateToProps = (state) => ({
//   todos: state.reducer.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//     insert: (todo) => {
//       dispatch(insert(todo));
//     },
//   toggle: (id) => {
//     dispatch(toggle(id));
//   },
//   remove: (id) => {
//     dispatch(remove(id));
//   },
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
//     finished: () => {
//       dispatch(finished());
//     },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Todo);
