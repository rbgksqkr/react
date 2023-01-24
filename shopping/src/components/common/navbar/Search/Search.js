import styles from "./Search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import SearchList from "./SearchList";
import virtualData from "./SampleData";
import Dropdown from "../Dropdown";
import DropdownList from "../DropdownList";

const Search = () => {
  const [value, setValue] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  const onClick = () => {
    setIsDropdown(!isDropdown);
  };

  const filteredData = virtualData.filter((item) =>
    item.name.toUpperCase().includes(value.toUpperCase())
  );

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={onClick}>전체</button>
        <Dropdown visible={isDropdown}>
          <DropdownList />
        </Dropdown>

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
        {value && <SearchList data={filteredData} />}
      </div>
    </>
  );
};

export default Search;
