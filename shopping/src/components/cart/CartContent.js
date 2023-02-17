import styles from "./CartContent.module.scss";

const CartContent = ({ content }) => {
  const { name, price, src } = content;
  return (
    <div className={styles.cartContent}>
      <div className={styles.cartContentImage}>
        <img src={src} alt="cartContent" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default CartContent;
