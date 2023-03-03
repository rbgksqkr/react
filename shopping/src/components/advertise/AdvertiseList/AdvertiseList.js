import AdvertiseListItem from "./AdvertiseListItem";
import styles from "./AdvertiseList.module.scss";
import AdvertiseButtonList from "../AdvertiseButton/AdvertiseButtonList";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { recoilAdvertiseImage } from "../../../recoil/advertise/recoilAdvertiseState";

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
  const [images, setImages] = useRecoilState(recoilAdvertiseImage);

  const intervalRef = useRef(2);
  const onMouseOver = (id) => {
    setImages(
      images.map((image) =>
        image.id === id
          ? { ...image, active: true }
          : { ...image, active: false }
      )
    );
    intervalRef.current = id + 1;
  };

  const slideRef = useRef(null);

  useInterval(() => {
    // console.log(intervalRef.current, slideRef.current.style.transition);
    if (intervalRef.current === 4) {
      // if (slideRef.current) {
      //   slideRef.current.style.transition = "";
      // }
      intervalRef.current = 1;
      // setTimeout(() => {
      //   if (slideRef.current) {
      //     slideRef.current.style.transition = "all 500ms ease-in-out";
      //   }
      // }, 0);
    }
    setImages(
      images.map((image) =>
        image.id === intervalRef.current
          ? { ...image, active: true }
          : { ...image, active: false }
      )
    );

    intervalRef.current += 1;
  }, 2000);

  return (
    <div>
      <AdvertiseButtonList images={images} onMouseOver={onMouseOver} />

      <div className={styles.adList}>
        <div
          className={styles.imagesList}
          ref={slideRef}
          style={{
            height: `550px*${images.length}`,
            transition: "all 1s ease-in-out",
            transform: `translateY(${
              -1 * ((100 / images.length) * (intervalRef.current - 2))
            }%)`,
          }}
        >
          {images.map((image) => (
            <AdvertiseListItem key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseList;
