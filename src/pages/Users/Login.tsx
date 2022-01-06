import { useState } from "react";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "../../css/pages/users/Users.module.scss";
import { ReactComponent as Kakao } from "../../images/img/img_social_kakao.svg";
import { ReactComponent as Google } from "../../images/img/img_social_google.svg";
import EyeSlash from "../../images/eye_slash.svg";

interface ILoginForm {
  email: string;
  password: string;
}

function Login({ email, password }: ILoginForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit = (data: ILoginForm) => {
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
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>로그인</h1>
          <p className={cn(styles.pageExp)}>
            환영합니다
            <br />
            로그인 후 스터딧해보세요!
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
          <div className={cn(styles.btnList)}>
            <button className={cn(styles.emailLoginBtn)}>
              이메일로 로그인하기
            </button>
            <button className={cn(styles.kakaoLoginBtn)}>
              <Kakao />
              카카오로 로그인하기
            </button>
            <button className={cn(styles.googleLoginBtn)}>
              <Google />
              구글로 로그인하기
            </button>
          </div>
          <div className={cn(styles.utilityMenus)}>
            <Link to="/signin">아직 회원이 아니신가요?</Link>
            <Link to="/find-password">비밀번호 찾기</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
