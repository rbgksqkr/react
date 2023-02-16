import styles from "./ContentDetail.module.scss";

const ContentDetail = ({ contentDetail }) => {
  const { src, name, price } = contentDetail;
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={src} alt="vaccum" />
        </div>
        <div className={styles.detail}>
          <div>
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.price}>{price}</h2>
          </div>
          <hr />
          <div>
            <span>무료배송</span>
            <br />
            <br /> <span>내일(목) 2/16 도착 보장</span>
            <span>(6시간 12분 내 주문 시 / 서울⋅경기기준)</span>
          </div>
          <hr />
          <div>
            <span>모델명 / 품번 : EFCASD74320</span> <br />
            <br />
            <span>색상 : black</span>
          </div>
          <hr />
          <div className={styles.coupangPay}>
            <span>쿠페이 머니 결제 시 1% 적립</span>
            <br />
            <br />
            <span>[로켓와우 + 쿠페이 계좌이체] 결제 시 2% 적립</span>
            <br />
            <br />
            <span>
              [로켓와우 + 쿠페이 머니] 결제 시 4% 추가적립 2934일 남음
            </span>
          </div>
          <hr />
          <button className={styles.basket}>장바구니 담기</button>
          <button className={styles.buy}>바로구매</button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
