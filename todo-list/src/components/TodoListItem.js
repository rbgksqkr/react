import { MdRemoveCircleOutline } from "react-icons/md";
import "./TodoListItem.scss";
const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-list-item">
      <div className="check-box checked">
        <input type="checkbox" />
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
