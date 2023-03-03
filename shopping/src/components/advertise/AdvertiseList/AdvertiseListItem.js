import styles from "./AdvertiseListItem.module.scss";
import cn from "classnames";

const AdvertiseListItem = ({ image }) => {
  return (
    // <div className={styles.adListItem}>
    <div
      className={cn(
        styles.adListItem,
        image.active ? styles.fadeIn : styles.fadeOut
      )}
    >
      {/* {image.active && <img src={image.src} alt="advertise" />} */}
      <img src={image.src} alt="advertise" />
    </div>
  );
};

export default AdvertiseListItem;
