import styles from "./AdButtonItem.module.scss";
import cn from "classnames";

const AdButtonItem = ({ image, onMouseOver }) => {
  return (
    <div className={cn([styles.buttonItem], { [styles.active]: image.active })}>
      <img src={image.src} alt="ad" onMouseOver={() => onMouseOver(image.id)} />
    </div>
  );
};

export default AdButtonItem;
