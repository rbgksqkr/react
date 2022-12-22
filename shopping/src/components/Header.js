import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <span>즐겨찾기</span>
        <span>입점신청</span>
      </div>
      <div className={styles.rightHeader}>
        <Link href="/login">
          <a>로그인</a>
        </Link>
        <Link href="/signIn">
          <a>회원가입</a>
        </Link>
        <Link href="/center">
          <a>고객센터</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
