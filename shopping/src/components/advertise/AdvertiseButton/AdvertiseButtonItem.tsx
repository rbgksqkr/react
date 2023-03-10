import styles from "./AdvertiseButtonItem.module.scss";
import cn from "classnames";

const AdvertiseButtonItem = ({ image, currentIndex, onMouseOver }) => {
  return (
    <div
      className={cn([styles.buttonItem], {
        [styles.active]: image.id === currentIndex,
      })}
    >
      <img src={image.src} alt="ad" onMouseOver={() => onMouseOver(image.id)} />
    </div>
  );
};

export default AdvertiseButtonItem;
