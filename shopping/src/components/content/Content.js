import styles from "./Content.module.scss";
import { useState, useRef, useEffect } from "react";
import ContentRecommendList from "./ContentRecommend/ContentRecommendList";
import ContentNewList from "./ContentNew/ContentNewList";
import Loading from "../common/loader/Loading";

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
    {
      id: 6,
      name: "두피케어 샴푸",
      price: "11,340원",
      src: "images/1.jpg",
    },
  ]);

  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const nextId = useRef(recommendItems.length + 1);

  // 로딩on -> 1.5초 대기(유사 비동기 처리) -> item key 처리 -> state 추가 -> 로딩off
  const getMoreItem = async () => {
    setIsLoaded(true);
    // DB 구축 시 api 호출
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const items = recommendItems.map((item) => {
      return { ...item, id: nextId.current++ };
    });

    setRecommendItems((recommendItems) => recommendItems.concat(items));
    setIsLoaded(false);
  };

  //
  const onIntersect = async (entries, observer) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoaded) {
      await getMoreItem();
    }
  };

  const intersectRef = useRef(null);

  const options = {
    root: null, //기본 null, 관찰대상의 부모요소를 지정
    threshold: 0.7, // 관찰요소와 얼만큼 겹쳤을 때 콜백을 수행하도록 지정하는 요소
  };

  // intersectionOberserver 객체 생성 -> target element 화면에 70% 보이면 onIntersect 콜백함수 호출 -> cleanner
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, options);
    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  return (
    <div>
      <ContentNewList newItems={newItems} />
      <ContentRecommendList recommendItems={recommendItems} />
      <div ref={intersectRef}>{isLoaded && <Loading />}</div>
    </div>
  );
};

export default Content;
