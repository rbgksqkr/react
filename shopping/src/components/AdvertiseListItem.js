import "./AdvertiseListItem.scss";

const AdvertiseListItem = ({ image }) => {
  return (
    <div className="ad-list-item">
      {image.active && <img src={image.src} alt="advertise" />}
    </div>
  );
};

export default AdvertiseListItem;
