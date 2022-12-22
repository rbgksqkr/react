import styles from "./AdButtonList.module.scss";
import AdButtonItem from "./AdButtonItem";
const AdButton = ({ images, onMouseOver }) => {
  return (
    <div className={styles.buttonList}>
      {images.map((image) => (
        <AdButtonItem key={image.id} image={image} onMouseOver={onMouseOver} />
      ))}
    </div>
  );
};

export default AdButton;
