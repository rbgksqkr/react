import styles from "./Signup.module.scss";
import { useState } from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Signup = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const router = useRouter();

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    if (value.password !== value.checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
    }

    e.preventDefault();
    setValue({ ...value, password: "", checkPassword: "" });
    router.push("/"); // DB 구축 시 이메일이 존재하면 예외처리
  };

  return (
    <>
      <Link href="/" className={styles.logo}>
        <img src="images/logo.png" alt="logo" />
      </Link>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          fontWeight: "bolder",
        }}
      >
        회원 정보를 입력해주세요.
      </span>
      <form className={styles.signupForm} onSubmit={onSubmit}>
        <div>
          <div className={styles.emailDiv}>
            <div className={styles.emailIcon}>
              <AiOutlineMail />
            </div>
            <input
              type="email"
              placeholder="아이디(이메일)"
              autoComplete="off"
              required
              name="email"
              className={styles.email}
              value={value.email}
              onChange={onChange}
            ></input>
          </div>

          <div className={styles.passwordDiv}>
            <div className={styles.passwordIcon}>
              <AiFillLock />
            </div>
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              required
              className={styles.password}
              value={value.password}
              onChange={onChange}
            ></input>
          </div>
          <div className={styles.passwordDiv}>
            <div className={styles.passwordIcon}>
              <AiFillLock />
            </div>
            <input
              type="password"
              placeholder="비밀번호 확인"
              name="checkPassword"
              required
              className={styles.checkPassword}
              value={value.checkPassword}
              onChange={onChange}
            ></input>
          </div>
          <button className={styles.signupBtn}>가입하기</button>
        </div>
      </form>
      <div className={styles.footer}>©ToYou Corp. All rights reserved.</div>
    </>
  );
};

export default Signup;
