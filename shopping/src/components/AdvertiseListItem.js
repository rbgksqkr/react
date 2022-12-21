import "./AdvertiseListItem.scss";

const AdvertiseListItem = ({ image }) => {
  return (
    <div className="ad-list-item">
      <img src={image} alt="advertise" />
    </div>
  );
};

export default AdvertiseListItem;
