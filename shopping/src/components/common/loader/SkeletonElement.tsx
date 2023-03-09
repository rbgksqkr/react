import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./SkeletonElement.module.scss";

const SkeletonElement = () => {
  return (
    <div>
      <div>
        <Skeleton className={styles.avatar} />
        <div className={styles.info}>
          <Skeleton width={"200px"} />
          <Skeleton width={"200px"} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonElement;
