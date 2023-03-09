import styles from "./SearchList.module.scss";

const SearchList = ({ data }) => {
  return (
    <div className={data.length !== 0 ? styles.searchList : ""}>
      {data.map((data, idx) => (
        <div style={{ marginBottom: "10px" }} key={idx}>
          {data.name}
        </div>
      ))}
    </div>
  );
};

export default SearchList;
