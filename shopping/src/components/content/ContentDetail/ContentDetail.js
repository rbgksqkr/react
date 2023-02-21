import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { recoilCartContent } from "../../../recoil/cart/recoilCartState";
import styles from "./ContentDetail.module.scss";

const ContentDetail = ({ contentDetail }) => {
  const { src, name } = contentDetail;
  const price = Number(contentDetail.price);

  const [cartContents, setCartContents] = useRecoilState(recoilCartContent);

  const router = useRouter();

  const handleClick = () => {
    const newContent = {
      id: cartContents.length + 1,
      name: contentDetail.name,
      price,
      src: contentDetail.src,
      count: Number(contentDetail.count),
      delivery: Number(contentDetail.delivery),
    };

    const checkDuplication = cartContents.findIndex(
      (content) => content.name === newContent.name
    );

    if (checkDuplication >= 0) {
      setCartContents(
        cartContents.map((content) =>
          content.name === newContent.name
            ? { ...content, count: content.count + 1 }
            : content
        )
      );
    } else {
      setCartContents(cartContents.concat(newContent));
    }
    router.push("/cart");
  };
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={src} alt="vaccum" />
        </div>
        <div className={styles.detail}>
          <div>
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.price}>
              {price.toLocaleString("ko-KR")}
              <span>원</span>
            </h2>
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
          <button className={styles.basket} onClick={handleClick}>
            장바구니 담기
          </button>
          <button className={styles.buy}>바로구매</button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
