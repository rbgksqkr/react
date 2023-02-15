import styles from "./ContentNewItem.module.scss";
import Link from "next/link";

const ContentNewItem = ({ newItem }) => {
  return (
    <div>
      <div className={styles.content}>
        <Link
          href={{
            pathname: "/content/[contentID]",
            query: {
              contentID: newItem.id,
              src: newItem.src,
              name: newItem.name,
              price: newItem.price,
            },
          }}
        >
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
