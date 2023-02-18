import styles from "./CartContent.module.scss";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";

const CartContent = ({ content, handleToggle }) => {
  const { id, name, price, src, checked } = content;

  return (
    <div className={styles.cartContent}>
      <div className={styles.checkbox} onClick={() => handleToggle(id)}>
        {checked ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
      </div>
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
