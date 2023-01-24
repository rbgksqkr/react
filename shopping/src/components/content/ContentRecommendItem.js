import styles from "./ContentRecommendItem.module.scss";

const ContentRecoItem = ({ item }) => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={item.src} alt="vaccum" />
        </div>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.price}>{item.price}</div>
      </div>
    </div>
  );
};

export default ContentRecoItem;
