import styles from "./CategoryList.module.scss";
import { useState } from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "패션의류 / 잡화",
    },
    {
      id: 2,
      name: "뷰티",
    },
    {
      id: 3,
      name: "출산 / 유아동",
    },
    {
      id: 4,
      name: "식품",
    },
    {
      id: 5,
      name: "주방용품",
    },
    {
      id: 6,
      name: "생활용품",
    },
  ]);
  return (
    <div className={styles.modal}>
      {categories.map((category) => (
        <CategoryListItem
          key={category.id}
          category={category}
        ></CategoryListItem>
      ))}
    </div>
  );
};

export default CategoryList;
