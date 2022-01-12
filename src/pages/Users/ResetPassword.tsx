import { useState } from "react";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "../../css/pages/users/Users.module.scss";
import BackBtn from "../../images/arrow_back_btn_blue.svg";

interface ISigninForm {
  password: string;
  confirmPassword: string;
}

export default function ResetPassword() {
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
          <Link to="/find-password">
            <img src={BackBtn} alt="backBtn" className={cn(styles.arrow)} />
            이전으로
          </Link>
        </div>
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>비밀번호 재설정</h1>
          <p className={cn(styles.pageExp)}>새로운 비밀번호를 설정해주세요.</p>
        </div>
        <form action="POST" className={cn(styles.loginForm)}>
          {/* <div className={cn(styles.inputWrapper)}>
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
          <div className={cn(styles.btnList)}>
            <button className={cn(styles.emailLoginBtn)}>재설정하기</button>
          </div> */}
        </form>
      </div>
    </section>
  );
}
