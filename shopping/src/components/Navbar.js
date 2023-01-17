import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Category from "./Category";

const Navbar = () => {
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  const onMouseOver = (e) => {
    setModalOpen(true);
  };

  const onMouseOut = (e) => {
    setModalOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div
        className={styles.category}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <Category open={modalOpen} />
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
