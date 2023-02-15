import styles from "./ContentNewItem.module.scss";
import Link from "next/link";

const ContentNewItem = ({ newItem }) => {
  return (
    <div>
      <div className={styles.content}>
        <Link href="/content/detail">
          <div className={styles.image}>
            <img src={newItem.src} alt="vaccum" />
          </div>
        </Link>
        <div className={styles.name}>{newItem.name}</div>
        <div className={styles.price}>{newItem.price}</div>
      </div>
    </div>
  );
};

export default ContentNewItem;
