import styles from "./CategoryList.module.scss";
import { useState } from "react";
import CategoryListItem from "./CategoryListItem";
import { useRecoilState } from "recoil";
import { recoilCategoryList } from "../../recoil/category/recoilCategoryState";

const CategoryList = () => {
  const [categories, setCategories] = useRecoilState(recoilCategoryList);

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
