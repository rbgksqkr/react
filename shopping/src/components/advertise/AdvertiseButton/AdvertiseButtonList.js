import styles from "./AdvertiseButtonList.module.scss";
import AdvertiseButtonItem from "./AdvertiseButtonItem";
const AdvertiseButton = ({ images, onMouseOver }) => {
  return (
    <div className={styles.buttonList}>
      {images.map((image) => (
        <AdvertiseButtonItem
          key={image.id}
          image={image}
          onMouseOver={onMouseOver}
        />
      ))}
    </div>
  );
};

export default AdvertiseButton;
