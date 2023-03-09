import styles from "./Category.module.scss";
import { AiOutlineUnorderedList } from "react-icons/ai";
import CategoryList from "./CategoryList";

const Category = ({ open }) => {
  return (
    <div className={styles.category}>
      <div>
        <div className={styles.categoryImage}>
          <AiOutlineUnorderedList />
        </div>
        <span>카테고리</span>
      </div>
      {open ? <CategoryList /> : ""}
    </div>
  );
};

export default Category;
