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
            <img src={`/images/logo.png`} alt="home" />
          </div>
        </Link>
        <Dropdown />
        <Search />

        <Link href="/cart">
          <div className={styles.cart}>
            <div className={styles.cartImage}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </Link>

        <Link href="/mypage">
          <div className={styles.mypage}>
            <div className={styles.mypageImage}>
              <MdPersonOutline />
            </div>
          </div>
        </Link>
      </div>
      <hr style={{ opacity: 0.3, margin: 0 }} />
    </>
  );
};

export default Navbar;
