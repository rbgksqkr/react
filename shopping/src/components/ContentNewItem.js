import styles from "./ContentNewItem.module.scss";

const ContentNewItem = ({ newItem }) => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={newItem.src} alt="vaccum" />
        </div>
        <div className={styles.name}>{newItem.name}</div>
        <div className={styles.price}>{newItem.price}</div>
      </div>
    </div>
  );
};

export default ContentNewItem;
