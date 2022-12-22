import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.category}>
        <div>
          <div className={styles.categoryImage}>
            <AiOutlineUnorderedList />
          </div>
          <span>카테고리</span>
        </div>
      </div>
      <div className={styles.home}>
        <img src="images/logo.png" alt="home" />
      </div>
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          className={styles.searchInput}
          placeholder="찾고 싶은 상품을 검색하세요!"
          onChange={onChange}
          value={value}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>

      <div className={styles.mypage}>
        <div className={styles.mypageImage}>
          <MdPersonOutline />
        </div>
        <span>마이쿠팡</span>
      </div>
      <div className={styles.basket}>
        <div className={styles.basketImage}>
          <AiOutlineShoppingCart />
        </div>
        <span>장바구니</span>
      </div>
    </div>
  );
};

export default Navbar;
