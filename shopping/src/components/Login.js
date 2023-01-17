import { useState } from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

const Login = () => {
  const [data, setData] = useState({
    userId: "",
    password: "",
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData({
      userId: "",
      password: "",
    });
  };
  return (
    <div className={styles.login}>
      <Link href="/">
        <div className={styles.logo}>
          <img src="images/logo.png" alt="home" />
        </div>
      </Link>
      <form className={styles.loginForm} onSubmit={onSubmit}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <div className={styles.userIdIcon}>
              <AiOutlineMail />
            </div>
            <input
              className={styles.userId}
              type="email"
              name="userId"
              value={data.userId}
              placeholder="아이디(이메일)"
              autocomplete="off"
              onChange={onChange}
              required
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div className={styles.passwordIcon}>
              <AiFillLock />
            </div>
            <input
              className={styles.password}
              type="password"
              name="password"
              required
              value={data.password}
              placeholder="비밀번호"
              onChange={onChange}
            ></input>
          </div>
          <button className={styles.loginBtn} type="submit">
            로그인
          </button>
          <Link href="/signup" styles={{ textDecoration: "none" }}>
            <button className={styles.signupBtn} type="button">
              회원가입
            </button>
          </Link>
        </div>
      </form>
      <div className={styles.footer}>©Coupang Corp. All rights reserved.</div>
    </div>
  );
};

export default Login;
