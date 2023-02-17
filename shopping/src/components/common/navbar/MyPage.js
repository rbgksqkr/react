import { useRouter } from "next/dist/client/router";
import styles from "./MyPage.module.scss";

const MyPage = () => {
  const router = useRouter();
  return (
    <div className={styles.myPage}>
      <div>아이디 : ToYou</div>
      <div className={styles.currentPassword}>
        현재 비밀번호 : <input placeholder="현재 비밀번호를 입력하세요"></input>
      </div>
      <div className={styles.nextPassword}>
        비밀번호 변경 :{" "}
        <input placeholder="변경할 비밀번호를 입력하세요"></input>
      </div>
      <button onClick={() => router.push("/")}>수정하기</button>
    </div>
  );
};

export default MyPage;
