import {
  MdRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ todo, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="todo-list-item">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
