import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <span>즐겨찾기</span>
        <span>입점신청</span>
      </div>
      <div className="right-header">
        <span>로그인</span>
        <span>회원가입</span>
        <span>고객센터</span>
      </div>
    </div>
  );
};

export default Header;
