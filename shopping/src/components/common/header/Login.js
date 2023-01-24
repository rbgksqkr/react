import { useState } from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData({
      email: "",
      password: "",
    });

    router.push("/"); // DB 구축 시 회원정보가 있으면 리다이렉트
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
            <div className={styles.emailIcon}>
              <AiOutlineMail />
            </div>
            <input
              className={styles.email}
              type="email"
              name="email"
              value={data.email}
              placeholder="아이디(이메일)"
              autoComplete="off"
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
          <hr />
          <Link href="/signup" className={styles.signupBtn}>
            회원가입
          </Link>
        </div>
      </form>
      <div className={styles.footer}>©ToYou Corp. All rights reserved.</div>
    </div>
  );
};

export default Login;
