import styles from "./ContentRecommendList.module.scss";
import ContentRecommendItem from "./ContentRecommendItem";

const ContentRecommendList = ({ recommendItems }) => {
  return (
    <div>
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "20px" }}>
          HOT! TREND! 카테고리별 추천상품
        </span>
        <br />
        <div className={styles.recoItemList}>
          {recommendItems.map((recoItem) => (
            <ContentRecommendItem
              key={recoItem.id}
              item={recoItem}
            ></ContentRecommendItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRecommendList;
