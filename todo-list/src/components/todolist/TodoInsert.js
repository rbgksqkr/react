import { IoMdAddCircleOutline } from "react-icons/io";
import "./TodoInsert.scss";
import { useState, useRef, useEffect } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    if (value.length !== 0) {
      console.log(value);
      onInsert(value);
    }
    setValue("");
    valueRef.current.focus();
    e.preventDefault();
  };

  const valueRef = useRef();
  useEffect(() => valueRef.current.focus(), []);
  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        onChange={onChange}
        value={value}
        ref={valueRef}
      />
      <button>
        <IoMdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
