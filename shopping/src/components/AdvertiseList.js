import AdvertiseListItem from "./AdvertiseListItem";
import "./AdvertiseList.scss";
import AdButtonList from "./AdButtonList";

const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
const AdvertiseList = () => {
  return (
    <div className="ad-list">
      <AdButtonList images={images} />

      {images.map((image, idx) => (
        <AdvertiseListItem key={idx} image={image} />
      ))}
    </div>
  );
};

export default AdvertiseList;
