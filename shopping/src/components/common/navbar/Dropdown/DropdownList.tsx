import styles from "./DropdownList.module.scss";
import cn from "classnames";

const dropdownList = [
  "전체",
  "여성패션",
  "남성패션",
  "남녀 공용 의류",
  "뷰티",
  "출산/유아동",
  "식품",
];

const DropdownList = ({ visible, onClick }) => {
  return (
    <div
      className={cn(
        styles.dropdownList,
        visible ? styles.fadeIn : styles.fadeOut
      )}
    >
      <div className={styles.dropdownItem}>
        {dropdownList.map((item, key) => (
          <div key={key} onClick={() => onClick(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownList;
