import styles from "./AdvertiseButtonList.module.scss";
import AdvertiseButtonItem from "./AdvertiseButtonItem";
const AdvertiseButton = ({ images, currentIndex, onMouseOver }) => {
  return (
    <div className={styles.buttonList}>
      {images.map((image, imageIndex) => (
        <AdvertiseButtonItem
          key={imageIndex}
          image={image}
          currentIndex={currentIndex}
          onMouseOver={onMouseOver}
        />
      ))}
    </div>
  );
};

export default AdvertiseButton;
