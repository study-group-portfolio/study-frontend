import cn from "classnames";
import styles from "../../css/pages/users/Users.module.scss";
// Enum
import {
  ButtonType,
  Path,
  InputType,
  TextInputState,
  TextInputType,
} from "utils/enum";
// Components
import TextInput from "components/common/TextInput";
import Button from "../../components/common/Button";
import BackBtn from "../../components/Auth/BackBtn";

export default function FindPassword() {
  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <BackBtn to={Path.로그인} />
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
            <label>이메일</label>
            <TextInput
              placeholder={"example@studyit.com"}
              type={InputType.텍스트형}
              textInputState={TextInputState.기본값}
              textInputType={TextInputType.일반형}
            />
          </div>
          <div className={cn(styles.btnList)}>
            <Button
              buttonName={"이메일로 링크 받기"}
              buttonType={ButtonType.기본}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
