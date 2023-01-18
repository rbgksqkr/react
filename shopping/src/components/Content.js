import styles from "./Content.module.scss";
import { useState } from "react";
import ContentNewItem from "./ContentNewItem";
import ContentRecoItem from "./ContentRecoItem";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "청소기",
      price: "491,470원",
      src: "images/4.jpg",
    },
    {
      id: 2,
      name: "청소기",
      price: "491,470원",
      src: "images/4.jpg",
    },
    {
      id: 3,
      name: "청소기",
      price: "491,470원",
      src: "images/4.jpg",
    },
  ]);

  const [recommendItems, setRecommendItems] = useState([
    {
      id: 1,
      name: "두피케어 샴푸",
      price: "11,340원",
      src: "images/1.jpg",
    },
    {
      id: 2,
      name: "두피케어 샴푸",
      price: "11,340원",
      src: "images/1.jpg",
    },
    {
      id: 3,
      name: "두피케어 샴푸",
      price: "11,340원",
      src: "images/1.jpg",
    },
  ]);

  return (
    <div>
      <div>
        <div style={{ width: "310px", margin: "auto", marginTop: "20px" }}>
          <span style={{ fontSize: "20px" }}>오늘의 발견</span>
          <span style={{ fontSize: "13px" }}>
            | 오늘 쿠팡이 엄선한 가장 HOT한 신상품 !
          </span>
        </div>
        <div className={styles.itemList}>
          {items.map((item) => (
            <ContentNewItem key={item.id} item={item}></ContentNewItem>
          ))}
        </div>
      </div>

      <div style={{ width: "310px", margin: "auto", marginTop: "40px" }}>
        <span style={{ fontSize: "20px" }}>
          HOT! TREND! 카테고리별 추천상품
        </span>
        <br />
        <div className={styles.recoItemList}>
          {recommendItems.map((recoItem) => (
            <ContentRecoItem
              key={recoItem.id}
              item={recoItem}
            ></ContentRecoItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
