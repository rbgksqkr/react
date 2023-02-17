import { AiOutlineShoppingCart, AiFillCaretDown } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Category from "../../category/Category";
import Search from "./Search/Search";
import Dropdown from "./Dropdown/Dropdown";
import Link from "next/link";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onMouseOver = (e) => {
    setModalOpen(true);
  };

  const onMouseOut = (e) => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <Category open={modalOpen} />
        </div>
        <Link href="/">
          <div className={styles.logo}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="home" />
          </div>
        </Link>
        <Dropdown />
        <Search />

        <Link href="/mypage">
          <div className={styles.mypage}>
            <div className={styles.mypageImage}>
              <MdPersonOutline />
            </div>
            <span>마이페이지</span>
          </div>
        </Link>
        <Link href="/cart">
          <div className={styles.basket}>
            <div className={styles.basketImage}>
              <AiOutlineShoppingCart />
            </div>
            <span>장바구니</span>
          </div>
        </Link>
      </div>
      <hr style={{ opacity: 0.3, margin: 0 }} />
    </>
  );
};

export default Navbar;
