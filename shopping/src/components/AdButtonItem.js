import "./AdButtonItem.scss";
import cn from "classnames";

const AdButtonItem = ({ image, onMouseOver }) => {
  return (
    <div className={cn("button-item", { active: image.active })}>
      <img src={image.src} alt="ad" onMouseOver={() => onMouseOver(image.id)} />
    </div>
  );
};

export default AdButtonItem;
