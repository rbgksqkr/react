import AdvertiseListItem from "./AdvertiseListItem";
import styles from "./AdvertiseList.module.scss";
import AdButtonList from "./AdButtonList";
import { useState } from "react";

const AdvertiseList = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "images/1.jpg",
      active: true,
    },
    {
      id: 2,
      src: "images/2.jpg",
      active: false,
    },
    {
      id: 3,
      src: "images/3.jpg",
      active: false,
    },
  ]);

  // 타깃은 active: true, 나머진 false
  const onMouseOver = (id) => {
    setImages(
      images.map((image) =>
        image.id === id
          ? { ...image, active: true }
          : { ...image, active: false }
      )
    );
  };

  return (
    <div className={styles.adList}>
      <AdButtonList images={images} onMouseOver={onMouseOver} />
      <div>
        {images.map((image) => (
          <AdvertiseListItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default AdvertiseList;
