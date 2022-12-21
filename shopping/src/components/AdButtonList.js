import "./AdButtonList.scss";
import AdButtonItem from "./AdButtonItem";
import { useState } from "react";
import cn from "classnames";
const AdButton = ({ images }) => {
  const [active, setActive] = useState(0);
  const onMouseOver = (index) => {
    setActive(index);
  };
  return (
    <div className="button-list">
      {images.map((image, index) => (
        <AdButtonItem
          key={index}
          index={index}
          image={image}
          className={cn("button-item", { active: index === active })}
          onMouseOver={onMouseOver}
        />
      ))}
    </div>
  );
};

export default AdButton;
