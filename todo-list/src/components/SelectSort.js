import { useState } from "react";

const OPTIONS = [
  { value: "increase", name: "오름차순" },
  { value: "decrease", name: "내림차순" },
  { value: "finished", name: "할일완료순" },
];

const SelectSort = ({ onSelect }) => {
  // const [selected, setSelected] = useState("");

  const onChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div>
      <select onChange={onChange}>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSort;
