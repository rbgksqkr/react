import "./AdButtonItem.scss";

const AdButtonItem = ({ className, index, image, onMouseOver }) => {
  return (
    <div className={className}>
      <img src={image} alt="ad" onMouseOver={() => onMouseOver(index)} />
    </div>
  );
};

export default AdButtonItem;
