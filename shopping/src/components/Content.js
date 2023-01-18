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
    {
      id: 4,
      name: "청소기",
      price: "491,470원",
      src: "images/4.jpg",
    },
    {
      id: 5,
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
    {
      id: 4,
      name: "두피케어 샴푸",
      price: "11,340원",
      src: "images/1.jpg",
    },
    {
      id: 5,
      name: "두피케어 샴푸",
      price: "11,340원",
      src: "images/1.jpg",
    },
  ]);

  return (
    <div>
      <div>
        <span style={{ fontSize: "20px" }}>오늘의 발견</span>
        <span style={{ fontSize: "13px" }}>
          | 오늘 쿠팡이 엄선한 가장 HOT한 신상품 !
        </span>
        <br />
        <div className={styles.itemList}>
          {items.map((item) => (
            <ContentNewItem key={item.id} item={item}></ContentNewItem>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <span style={{ fontSize: "20px" }}>HOT! TREND</span>
        <br />
        <span style={{ fontSize: "20px" }}>카테고리별 추천상품</span>
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
