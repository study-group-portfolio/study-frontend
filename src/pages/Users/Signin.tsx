import { useState } from "react";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "../../css/pages/users/Users.module.scss";
import EyeSlash from "../../images/eye_slash.svg";
import BackBtn from "../../images/arrow_back_btn_blue.svg";

interface ISigninForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISigninForm>();

  const onSubmit = (data: ISigninForm) => {
    console.log(data);
  };

  // Password visibility toggle
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });
  const handleVisibility = (event: any) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };
  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.backBtn)}>
          <Link to="/signin">
            <img src={BackBtn} alt="backBtn" className={cn(styles.arrow)} />
            이전으로
          </Link>
        </div>
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>회원가입</h1>
          <p className={cn(styles.pageExp)}>
            반갑습니다.
            <br />
            열정적인 멤버들이 기다리고 있어요!
          </p>
        </div>
        <form action="POST" className={cn(styles.loginForm)}>
          <div className={cn(styles.inputWrapper)}>
            <label htmlFor="email">이메일</label>
            <input type="text" placeholder="example@studyit.com" />
          </div>
          <div className={cn(styles.inputWrapper)}>
            <label htmlFor="password">비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
            <img src={EyeSlash} className={cn(styles.icon)} alt="eye-slash" />
          </div>
          <div className={cn(styles.inputWrapper)}>
            <label htmlFor="password">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
            />
            <img src={EyeSlash} className={cn(styles.icon)} alt="eye-slash" />
          </div>
          <div className={cn(styles.inputWrapper)}>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" placeholder="닉네임을 입력해 주세요" />
          </div>
          <div className={cn(styles.btnList)}>
            <button className={cn(styles.emailLoginBtn)}>회원가입하기</button>
          </div>
        </form>
      </div>
    </section>
  );
}
