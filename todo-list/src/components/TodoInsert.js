import { IoMdAddCircleOutline } from "react-icons/io";
import "./TodoInsert.scss";
const TodoInsert = () => {
  return (
    <form className="todo-insert">
      <input placeholder="할 일을 입력해주세요" />
      <button>
        <IoMdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
