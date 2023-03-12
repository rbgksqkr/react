import { cartResultData } from "../../types/cart/content";
import styles from "./CartResult.module.scss";

interface IProps {
  resultData : cartResultData
};

const CartResult = (props: IProps) => {
  const { resultData } = props;
  const { totalPrice, totalDelivery, totalPayPrice } = resultData;
  return (
    <div className={styles.cartResult}>
      <div style={{ display: "flex", padding: "10px" }}>
        <div>상품 금액</div>
        <div style={{ marginLeft: "auto" }}>
          {totalPrice.toLocaleString("ko-KR")}원
        </div>
      </div>

      <div style={{ display: "flex", padding: "10px" }}>
        <span>배송비</span>
        <span style={{ marginLeft: "auto" }}>
          + {totalDelivery.toLocaleString("ko-KR")}원
        </span>
      </div>

      <hr style={{ width: "250px" }} />

      <div style={{ display: "flex", padding: "10px" }}>
        <span>결제 예정 금액</span>
        <span style={{ marginLeft: "auto" }}>
          {totalPayPrice.toLocaleString("ko-KR")}원
        </span>
      </div>

      <button className={styles.buy}>주문하기</button>
    </div>
  );
};

export default CartResult;
