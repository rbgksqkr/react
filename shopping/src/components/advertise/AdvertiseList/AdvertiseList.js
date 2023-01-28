import AdvertiseListItem from "./AdvertiseListItem";
import styles from "./AdvertiseList.module.scss";
import AdvertiseButtonList from "../AdvertiseButton/AdvertiseButtonList";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import {
  advertiseImage,
  advertiseId,
} from "../../../recoil/advertise/recoilAdvertiseState";

function useInterval(callback, delay) {
  const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

const AdvertiseList = () => {
  const [images, setImages] = useRecoilState(advertiseImage);
  const [currentId, setCurrentId] = useRecoilState(advertiseId);
  // 타깃은 active: true, 나머진 false
  const onMouseOver = (id) => {
    setImages(
      images.map((image) =>
        image.id === id
          ? { ...image, active: true }
          : { ...image, active: false }
      )
    );
    setCurrentId(id);
  };

  // 1.5초마다 다음 광고로 넘어가기
  useInterval(() => {
    setCurrentId((prevId) => prevId + 1);
    if (currentId === 3) setCurrentId(1);
    setImages(
      images.map((image) =>
        image.id === currentId
          ? { ...image, active: true }
          : { ...image, active: false }
      )
    );
  }, 1500);

  return (
    <div className={styles.adList}>
      <AdvertiseButtonList images={images} onMouseOver={onMouseOver} />
      <div>
        {images.map((image) => (
          <AdvertiseListItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default AdvertiseList;
