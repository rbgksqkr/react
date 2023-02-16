import styles from "./ContentNewList.module.scss";
import ContentNewItem from "./ContentNewItem";

const ContentNewList = ({ newContents }) => {
  return (
    <div>
      <div>
        <div
          style={{
            width: "380px",
            margin: "auto",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "20px" }}>오늘의 발견 </span>
          <span style={{ fontSize: "13px" }}>
            | 오늘 ToYou가 엄선한 가장 HOT한 신상품 !
          </span>
        </div>
        <div className={styles.itemList}>
          {newContents.map((newItem) => (
            <ContentNewItem key={newItem.id} newItem={newItem}></ContentNewItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentNewList;
