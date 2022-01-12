import cn from "classnames";
import { Link } from "react-router-dom";
// Styles
import styles from "../../css/pages/users/Users.module.scss";
// Components
import {
  TextInputState,
  TextInputType,
  InputType,
  ButtonType,
} from "utils/enum";
import TextInput from "components/common/TextInput";
import Button from "components/common/Button";
// icons
import EyeSlash from "../../images/icon/ic_eye_slash.svg";

export default function Login() {
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
            <label>이메일</label>
            <TextInput
              placeholder={"example@studyit.com"}
              type={InputType.텍스트형}
              textInputState={TextInputState.기본값}
              textInputType={TextInputType.일반형}
            />
          </div>
          <div className={cn(styles.inputWrapper)}>
            <label>비밀번호</label>
            <TextInput
              placeholder={"비밀번호를 입력해주세요."}
              type={InputType.패스워드형}
              buttonImg={EyeSlash}
              textInputState={TextInputState.기본값}
              textInputType={TextInputType.아이콘형}
            />
          </div>
          <div className={cn(styles.btnList)}>
            <Button
              buttonName={"이메일로 로그인하기"}
              buttonType={ButtonType.기본}
            />
            <Button
              buttonName={"카카오로 로그인하기"}
              buttonType={ButtonType.카카오}
            />
            <Button
              buttonName={"구글로 로그인하기"}
              buttonType={ButtonType.구글}
            />
          </div>
        </form>
        <div className={cn(styles.utilityMenus)}>
          <Link to="/users/signin">아직 회원이 아니신가요?</Link>
          <Link to="/find-password">비밀번호 찾기</Link>
        </div>
      </div>
    </section>
  );
}
