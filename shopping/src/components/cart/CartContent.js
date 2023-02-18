import styles from "./CartContent.module.scss";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const CartContent = ({
  content,
  handleToggle,
  handleRemove,
  handleCountIncrease,
  handleCountDecrease,
}) => {
  const { id, name, src, checked, price, count } = content;

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
        <div className={styles.price}>
          {price.toLocaleString("ko-KR")}
          <span>원</span>
        </div>
      </div>
      <div className={styles.countContent}>
        <button onClick={() => handleCountDecrease(id)}>-</button>
        <span>{count}</span>
        <button onClick={() => handleCountIncrease(id)}>+</button>
      </div>
      <div className={styles.cancelBtn} onClick={() => handleRemove(id)}>
        <MdOutlineCancel />
      </div>
    </div>
  );
};

export default CartContent;