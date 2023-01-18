import styles from "./Search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <input
          className={styles.searchInput}
          placeholder="찾고 싶은 상품을 검색해보세요!"
          onChange={onChange}
          value={value}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
