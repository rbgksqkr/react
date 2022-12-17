import { IoMdAddCircleOutline } from "react-icons/io";
import "./TodoInsert.scss";
import { useState } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(value);
    setValue("");
    e.preventDefault();
  };

  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        onChange={onChange}
        value={value}
      />
      <button>
        <IoMdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
