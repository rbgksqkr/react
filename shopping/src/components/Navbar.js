import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { useState } from "react";
import "./Navbar.scss";

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
    <div className="navbar">
      <div className="category">
        <div>
          <div className="category-image">
            <AiOutlineUnorderedList />
          </div>
          <span>카테고리</span>
        </div>
      </div>
      <div className="home">
        <img src="images/logo.png" alt="home" />
      </div>
      <form className="search" onSubmit={onSubmit}>
        <input
          className="search-input"
          placeholder="찾고 싶은 상품을 검색하세요!"
          onChange={onChange}
          value={value}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>

      <div className="mypage">
        <div className="mypage-image">
          <MdPersonOutline />
        </div>
        <span>마이쿠팡</span>
      </div>
      <div className="basket">
        <div className="basket-image">
          <AiOutlineShoppingCart />
        </div>
        <span>장바구니</span>
      </div>
    </div>
  );
};

export default Navbar;
