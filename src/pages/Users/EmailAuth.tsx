import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "../../css/pages/users/Users.module.scss";

export default function EmailAuth() {
  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>이메일 인증</h1>
          <p className={cn(styles.pageExp)}>
            인증 메일을 <strong>example@studyit.com</strong>(으)로 전송했습니다.
            <br />
            받으신 이메일을 열어 버튼을 클릭하면 회원가입이 완료됩니다.
          </p>
        </div>
        <div className={cn(styles.errorExpSection)}>
          <p className={cn(styles.errorExp)}>
            인증 메일을 받지 못하셨나요?
            <br />
            스팸보관함 확인 또는{" "}
            <Link to="/email-auth" className={cn(styles.emailResendBtn)}>
              인증 메일 재전송
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
