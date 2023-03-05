import AdvertiseListItem from "./AdvertiseListItem";
import styles from "./AdvertiseList.module.scss";
import AdvertiseButtonList from "../AdvertiseButton/AdvertiseButtonList";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { recoilAdvertiseImage } from "../../../recoil/advertise/recoilAdvertiseState";

function useInterval(callback, delay) {
  const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback, delay]);

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
  const [images, setImages] = useRecoilState(recoilAdvertiseImage);
  const [delay, setDelay] = useState(2000);
  const [slideIndex, setSlideIndex] = useState(2);

  const onMouseOver = (id) => {
    setSlideIndex(id + 1);
    setTimeout(() => setDelay(2000), 0);
  };

  const slideRef = useRef(null);

  const setSlide = () => {
    const SLIDE_NUM = images.length;
    const beforeSlide = images[SLIDE_NUM - 1];
    const afterSlide = images[0];
    // 무한 슬라이드를 구현하기 위해 새롭게 배열을 만듦.
    return [beforeSlide, ...images, afterSlide];
  };

  useInterval(() => {
    if (slideIndex === 5) {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }
      setSlideIndex(1);
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 1s ease-in-out";
        }
      }, 10);
    }

    setSlideIndex((slideIndex) => slideIndex + 1);
  }, delay);

  useEffect(() => {
    if (slideIndex === 5) {
      setDelay(1000);
    } else {
      setDelay(2000);
    }
  }, [slideIndex]);

  const copySlide = setSlide();

  return (
    <div>
      <AdvertiseButtonList
        images={images}
        currentIndex={slideIndex - 1}
        onMouseOver={onMouseOver}
      />
      {slideIndex}
      <div className={styles.adList}>
        <div
          className={styles.imagesList}
          ref={slideRef}
          style={{
            height: `550px*${copySlide.length}`,
            transition: "all 1s ease-in-out",
            transform: `translateY(${
              -1 * ((100 / copySlide.length) * (slideIndex - 1))
            }%)`,
          }}
        >
          {copySlide.map((image, imageIndex) => (
            <AdvertiseListItem key={imageIndex} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseList;
