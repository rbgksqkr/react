import styles from "./Content.module.scss";
import { useState, useRef, useEffect } from "react";
import ContentRecommendList from "./ContentRecommendList";
import ContentNewList from "./ContentNewList";

const Content = () => {
  const [newItems, setNewItems] = useState([
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
      <ContentNewList newItems={newItems} />
      <ContentRecommendList recommendItems={recommendItems} />
    </div>
  );
};

export default Content;
