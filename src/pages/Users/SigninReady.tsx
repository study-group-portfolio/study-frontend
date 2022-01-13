import cn from "classnames";
import styles from "../../css/pages/users/Users.module.scss";
import { ButtonType, Path } from "utils/enum";
import Button from "../../components/common/Button";
import BackBtn from "components/common/BackBtn";

function SigninReady() {
  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <BackBtn to={Path.로그인} />
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>회원가입</h1>
          <p className={cn(styles.pageExp)}>
            반갑습니다.
            <br />
            열정적인 멤버들이 기다리고 있어요!
          </p>
        </div>
        <div className={cn(styles.btnList)}>
          <Button
            buttonName={"이메일로 시작하기"}
            buttonType={ButtonType.기본}
          />
          <Button
            buttonName={"카카오로 시작하기"}
            buttonType={ButtonType.카카오}
          />
          <Button buttonName={"구글로 시작하기"} buttonType={ButtonType.구글} />
        </div>
      </div>
    </section>
  );
}

export default SigninReady;
