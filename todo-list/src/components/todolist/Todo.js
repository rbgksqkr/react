import { connect } from "react-redux";
import TodoList from "./TodoList";
import {
  insert,
  toggle,
  remove,
  increase,
  decrease,
  finished,
} from "../../actions/todo";

const Todo = ({
  todos,
  insert,
  toggle,
  remove,
  increase,
  decrease,
  finished,
}) => {
  return (
    <TodoList
      todos={todos}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
      onIncrease={increase}
      onDecrease={decrease}
      onFinished={finished}
    />
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => ({
  insert: (todo) => {
    dispatch(insert(todo));
  },
  toggle: (id) => {
    dispatch(toggle(id));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
  finished: () => {
    dispatch(finished());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
