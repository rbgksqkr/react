import styles from "./ContentDetail.module.scss";

const ContentDetail = ({ contentDetail }) => {
  const { content, src, name, price } = contentDetail;
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={src} alt="vaccum" />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default ContentDetail;
