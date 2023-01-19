import styles from "./Content.module.scss";
import { useState, useRef, useEffect } from "react";
import ContentRecommendList from "./ContentRecommendList";
import ContentNewList from "./ContentNewList";
import Loading from "./loading";

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

  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const nextId = useRef(4);

  // 로딩on -> 1.5초 대기(유사 비동기 처리) -> item key 처리 -> state 추가 -> 로딩off
  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const items = recommendItems.map((item) => {
      return { ...item, id: nextId.current++ };
    });

    setRecommendItems((recommendItems) => recommendItems.concat(items));
    setIsLoaded(false);
  };

  //
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  // intersectionOberserver 객체 생성 -> target element 화면에 70% 보이면 onIntersect 콜백함수 호출 -> cleanner
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.7,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <div>
      <ContentNewList newItems={newItems} />
      <ContentRecommendList recommendItems={recommendItems} />
      <div ref={setTarget}>{isLoaded && <Loading />}</div>
    </div>
  );
};

export default Content;
