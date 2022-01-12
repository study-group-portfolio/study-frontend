import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "../../css/pages/users/Users.module.scss";
import { ButtonType } from "utils/enum";
import Button from "../../components/common/Button";
import BackBtn from "../../images/arrow_back_btn_blue.svg";

function SigninReady() {
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
          <div className={cn(styles.btnList)}>
            <Button
              buttonName={"이메일로 시작하기"}
              buttonType={ButtonType.기본}
            />
            <Button
              buttonName={"카카오로 시작하기"}
              buttonType={ButtonType.카카오}
            />
            <Button
              buttonName={"구글로 시작하기"}
              buttonType={ButtonType.구글}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default SigninReady;
