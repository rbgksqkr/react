import SkeletonElement from "./SkeletonElement";
import styles from "./SkeletonContent.module.scss";

const SkeletonContent = ({ items }) => {
  return (
    <div>
      <div className={styles.itemList}>
        {items.map((content) => (
          <SkeletonElement key={content.id} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonContent;
