import "./AdButtonList.scss";
import AdButtonItem from "./AdButtonItem";
const AdButton = ({ images, onMouseOver }) => {
  return (
    <div className="button-list">
      {images.map((image) => (
        <AdButtonItem key={image.id} image={image} onMouseOver={onMouseOver} />
      ))}
    </div>
  );
};

export default AdButton;
