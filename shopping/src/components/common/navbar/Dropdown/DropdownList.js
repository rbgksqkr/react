import styles from "./DropdownList.module.scss";
import cn from "classnames";
import { useState, useEffect } from "react";

const DropdownList = ({ visible }) => {
  return (
    <div
      className={cn(
        styles.dropdownList,
        visible ? styles.fadeIn : styles.fadeOut
      )}
    >
      <div>전체</div>
      <div>여성패션</div>
      <div>남성패션</div>
      <div>남녀 공용 의류</div>
      <div>유아동패션</div>
      <div>뷰티</div>
      <div>출산/유아동</div>
      <div>식품</div>
    </div>
  );
};

export default DropdownList;
