import { AiFillCaretDown } from "react-icons/ai";
import styles from "./Dropdown.module.scss";
import { useState, useEffect } from "react";
import DropdownList from "./DropdownList";
import cn from "classnames";

const Dropdown = () => {
  const [value, setValue] = useState("전체");
  const [visible, setVisible] = useState(false);
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);

  const onClick = (e) => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (visible) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400);
    }
  }, [visible]);

  return (
    <div>
      <div className={styles.dropdown} onClick={onClick}>
        <span>{value}</span>
        <AiFillCaretDown />
      </div>
      {visibilityAnimation ? <DropdownList visible={visible} /> : ""}
    </div>
  );
};

export default Dropdown;
