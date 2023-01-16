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
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
        <Link href="/center">고객센터</Link>
      </div>
    </div>
  );
};

export default Header;
