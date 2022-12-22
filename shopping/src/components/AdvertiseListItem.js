import styles from "./AdvertiseListItem.module.scss";

const AdvertiseListItem = ({ image }) => {
  return (
    <div className={styles.adListItem}>
      {image.active && <img src={image.src} alt="advertise" />}
    </div>
  );
};

export default AdvertiseListItem;
