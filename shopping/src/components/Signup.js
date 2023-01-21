import styles from "./Signup.module.scss";
import { useState } from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

const Signup = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    if (value.password !== value.checkPassword)
      alert("비밀번호가 일치하지 않습니다.");
    e.preventDefault();
    setValue({ ...value, password: "", checkPassword: "" });
  };

  return (
    <>
      <div className={styles.logo}>
        <img src="images/logo.png" alt="logo" />
      </div>
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
    </>
  );
};

export default Signup;
