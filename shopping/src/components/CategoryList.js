import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  return (
    <div className={styles.modal}>
      <div>패션의류/잡화</div>
      <div>뷰티</div>
      <div>출산/유아동</div>
      <div>식품</div>
      <div>주방용품</div>
      <div>생활용품</div>
    </div>
  );
};

export default CategoryList;
