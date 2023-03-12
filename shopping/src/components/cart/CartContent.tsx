import styles from "./CartContent.module.scss";
import {
  AiOutlineCheckSquare,
  AiFillCheckSquare,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { cartContent } from "../../types/cart/content";
interface IProps {
  content: cartContent,
  handleToggle: (id:number) => void,
  handleRemove: (id:number) => void,
  handleCountIncrease: (id:number) => void,
  handleCountDecrease: (id:number) => void,
}

const CartContent = (props: IProps) => {
  const {  content, handleToggle,handleRemove, handleCountIncrease, handleCountDecrease} = props;
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
        <div
          className={styles.decrease}
          onClick={() => handleCountDecrease(id)}
        >
          <AiOutlineMinusCircle />
        </div>
        <span>{count}</span>
        <div
          className={styles.increase}
          onClick={() => handleCountIncrease(id)}
        >
          <AiOutlinePlusCircle />
        </div>
      </div>
      <div className={styles.cancelBtn} onClick={() => handleRemove(id)}>
        <MdOutlineCancel />
      </div>
    </div>
  );
};

export default CartContent;
