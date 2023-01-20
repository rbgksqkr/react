import styles from "./SearchList.module.scss";

const SearchList = ({ data }) => {
  return (
    <div className={styles.searchList}>
      {data.map((data) => (
        <div>{data.name}</div>
      ))}
    </div>
  );
};

export default SearchList;
