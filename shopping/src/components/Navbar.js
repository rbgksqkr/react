import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Category from "./Category";
import Search from "./Search";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
      <Search />

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
