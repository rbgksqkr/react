import styles from "./CartResult.module.scss";

const CartResult = () => {
  return (
    <div className={styles.cartResult}>
      <span>전체 장바구니</span>
      <span>장바구니 총액</span>
      <button>바로 구매</button>
    </div>
  );
};

export default CartResult;
