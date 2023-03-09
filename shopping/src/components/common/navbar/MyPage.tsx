import { useRouter } from "next/dist/client/router";
import styles from "./MyPage.module.scss";
import { useState } from "react";

const MyPage = () => {
  // userId에는 현재 로그인 되어있는 아이디로 자동입력
  const [data, setData] = useState({
    userId: "",
    currentPassword: "",
    nextPassword: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // DB 연결 시 현재 비밀번호가 맞는 지, 맞으면 수정하기 눌렀을 때 변경할 비밀번호로 DB user data 변경
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.myPage}>
      <div className={styles.userId}>
        <div>아이디 : </div>
        <div style={{ marginLeft: "180px" }}>ToYou</div>
      </div>

      <div className={styles.currentPassword}>
        <div>현재 비밀번호 : </div>
        <input
          placeholder="현재 비밀번호를 입력하세요"
          name="currentPassword"
          onChange={handleChange}
        ></input>
      </div>

      <div className={styles.nextPassword}>
        <div>비밀번호 변경 : </div>
        <input
          placeholder="변경할 비밀번호를 입력하세요"
          name="nextPassword"
          onChange={handleChange}
        ></input>
      </div>

      <button onClick={handleClick}>수정하기</button>
    </div>
  );
};

export default MyPage;
