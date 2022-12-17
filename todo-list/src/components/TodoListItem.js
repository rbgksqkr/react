import { MdRemoveCircleOutline } from "react-icons/md";

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <div className="text">{todo.text}</div>
      <MdRemoveCircleOutline />
    </div>
  );
};

export default TodoListItem;
