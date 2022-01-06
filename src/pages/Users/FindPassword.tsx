import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "../../css/pages/users/Users.module.scss";
import BackBtn from "../../images/arrow_back_btn_blue.svg";

export default function FindPassword() {
  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.backBtn)}>
          <Link to="/login">
            <img src={BackBtn} alt="backBtn" className={cn(styles.arrow)} />
            이전으로
          </Link>
        </div>
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>비밀번호 찾기</h1>
          <p className={cn(styles.pageExp)}>
            비밀번호를 재설정하기 위한 링크를 이메일로 보내드릴게요.
            <br />
            가입 시 사용한 이메일 주소를 정확히 입력해주세요.
          </p>
        </div>
        <form action="POST" className={cn(styles.loginForm)}>
          <div className={cn(styles.inputWrapper)}>
            <label htmlFor="email">이메일</label>
            <input type="text" placeholder="example@studyit.com" />
          </div>
          <div className={cn(styles.btnList)}>
            <button className={cn(styles.emailLoginBtn)}>
              이메일로 링크 받기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
