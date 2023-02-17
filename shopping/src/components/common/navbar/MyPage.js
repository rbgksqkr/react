import { useRouter } from "next/dist/client/router";
import styles from "./MyPage.module.scss";

const MyPage = () => {
  const router = useRouter();
  return (
    <div className={styles.myPage}>
      <div className={styles.userId}>
        <div>아이디 : </div>
        <div style={{ marginLeft: "180px" }}>ToYou</div>
      </div>
      <div className={styles.currentPassword}>
        <div>현재 비밀번호 : </div>
        <input placeholder="현재 비밀번호를 입력하세요"></input>
      </div>
      <div className={styles.nextPassword}>
        <div>비밀번호 변경 : </div>
        <input placeholder="변경할 비밀번호를 입력하세요"></input>
      </div>
      <button onClick={() => router.push("/")}>수정하기</button>
    </div>
  );
};

export default MyPage;
