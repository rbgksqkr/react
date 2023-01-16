import { useState } from "react";
import style from "./Login.module.scss";
import Link from "next/link";

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
    <div className={style.login}>
      <Link href="/">
        <div className={style.logo}>
          <img src="images/logo.png" alt="home" />
        </div>
      </Link>
      <form className={style.loginForm} onSubmit={onSubmit}>
        <div>
          <div>
            <input
              className={style.userId}
              type="email"
              name="userId"
              value={data.userId}
              placeholder="아이디(이메일)"
              onChange={onChange}
              required
            ></input>
          </div>
          <div>
            <input
              className={style.password}
              type="password"
              name="password"
              required
              value={data.password}
              placeholder="비밀번호"
              onChange={onChange}
            ></input>
          </div>
          <button className={style.loginBtn} type="submit">
            로그인
          </button>
          <Link href="/signup" style={{ textDecoration: "none" }}>
            <button className={style.signupBtn} type="button">
              회원가입
            </button>
          </Link>
        </div>
      </form>
      <div className={style.footer}>©Coupang Corp. All rights reserved.</div>
    </div>
  );
};

export default Login;
