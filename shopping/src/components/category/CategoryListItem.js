import styles from "./CategoryListItem.module.scss";

const CategoryListItem = ({ category }) => {
  return <div className={styles.item}>{category.name}</div>;
};

export default CategoryListItem;
