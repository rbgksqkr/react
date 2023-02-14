import styles from "./Content.module.scss";
import { useState, useRef, useEffect } from "react";
import ContentRecommendList from "./ContentRecommend/ContentRecommendList";
import ContentNewList from "./ContentNew/ContentNewList";
import Loading from "../common/loader/Loading";
import { useRecoilState } from "recoil";
import {
  recoilNewContentList,
  recoilRecommendContentList,
} from "../../recoil/content/recoilContentState";

const Content = () => {
  const [newContents, setnewContents] = useRecoilState(recoilNewContentList);
  const [recommendContents, setRecommendContents] = useRecoilState(
    recoilRecommendContentList
  );

  const [isLoaded, setIsLoaded] = useState(false);
  const nextId = useRef(recommendContents.length + 1);

  // 로딩on -> 1.5초 대기(유사 비동기 처리) -> item key 처리 -> state 추가 -> 로딩off
  const getMoreItem = async () => {
    setIsLoaded(true);
    // DB 구축 시 api 호출
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const items = recommendContents.map((item) => {
      return { ...item, id: nextId.current++ };
    });

    setRecommendContents((recommendContents) =>
      recommendContents.concat(items)
    );
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
      <ContentNewList newContents={newContents} />
      <ContentRecommendList recommendContents={recommendContents} />
      <div ref={intersectRef}>{isLoaded && <Loading />}</div>
    </div>
  );
};

export default Content;
