import styles from "./ContentNewItem.module.scss";
import Link from "next/link";

const ContentNewItem = ({ newItem }) => {
  return (
    <div>
      <div className={styles.content}>
        <Link
          href={{
            pathname: "/content/[cid]",
            query: {
              cid: newItem.id,
              src: newItem.src,
              name: newItem.name,
              price: Number(newItem.price),
            },
          }}
          as={`/content/detail`}
        >
          <div className={styles.image}>
            <img src={newItem.src} alt="vaccum" />
          </div>
        </Link>
        <div className={styles.name}>{newItem.name}</div>
        <div className={styles.price}>
          {newItem.price.toLocaleString("ko-KR")}
          <span>원</span>
        </div>
      </div>
    </div>
  );
};

export default ContentNewItem;
