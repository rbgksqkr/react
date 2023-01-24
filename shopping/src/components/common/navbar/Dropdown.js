import styles from "./Dropdown.module.scss";
import { useState, useEffect } from "react";
import cn from "classnames";
const Dropdown = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);

  useEffect(() => {
    if (props.visible) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400);
    }
  }, [props.visible]);
  return (
    <article
      className={cn("dropdown", props.visible ? styles.fadeIn : styles.fadeOut)}
    >
      {visibilityAnimation && props.children}
    </article>
  );
};

export default Dropdown;
