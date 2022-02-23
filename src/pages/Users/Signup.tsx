import { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import dotenv from "dotenv";
// CSS
import styles from "../../css/pages/users/Users.module.scss";
// Utils
import {
  ButtonType,
  Path,
  InputType,
  TextInputState,
  TextInputType,
} from "utils/enum";
import { IUserSignup } from "utils/interface";
// Icons
import ic_visibility_on_24dp from "images/icon/ic_visibility_on_24dp.svg";
import ic_visibility_off_24dp from "images/icon/ic_visibility_off_24dp.svg";
// Components
import ReactHelmet from "components/common/Helmet";
import TextInput from "components/common/TextInput";
import Button from "../../components/common/Button";
import BackBtn from "components/common/BackBtn";
import { getCheck } from "../../api/userAPI";
// API
dotenv.config();
const BASE_URL = String(process.env.REACT_APP_BASE_URL);

interface ISignupInputs {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signin() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupFail, setSignupFail] = useState(false);

  // Validation
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const onSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      axios
        .post(`${BASE_URL}api/member/signup`, {
          email,
          nickname,
          password,
          confirmPassword,
        })
        .then((response) => setSignupSuccess(true))
        .catch((err: any) => setSignupFail(false));
    },
    [email, password, nickname]
  );

  async function signup({
    nickname,
    email,
  }: {
    nickname: string;
    email: string;
  }) {
    const alreadyExists = getCheck({ nickname, email });
  }

  return (
    <>
      <ReactHelmet description="로그인 화면" title="로그인" />
      <section className={cn(styles.container)}>
        <div className={cn(styles.wrapper)}>
          <BackBtn to={Path.회원가입} />
          <div className={cn(styles.pageTitleSection)}>
            <h1 className={cn(styles.pageTitle)}>회원가입</h1>
            <p className={cn(styles.pageExp)}>
              반갑습니다.
              <br />
              열정적인 멤버들이 기다리고 있어요!
            </p>
          </div>
          <div onSubmit={onSubmit} className={cn(styles.loginForm)}>
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
                type={visible ? InputType.텍스트형 : InputType.패스워드형}
                placeholder="비밀번호를 입력해주세요"
                helpText="영문/숫자/특수문자 조합, 8자~32자"
                textInputType={TextInputType.아이콘형}
                onClick={() => setVisible(!visible)}
                buttonImg={
                  visible ? ic_visibility_on_24dp : ic_visibility_off_24dp
                }
              />
            </div>
            <div className={cn(styles.inputWrapper)}>
              <label>비밀번호 확인</label>
              <TextInput
                type={visible ? InputType.텍스트형 : InputType.패스워드형}
                placeholder="비밀번호를 한 번 더 입력해주세요"
                textInputType={TextInputType.아이콘형}
                onClick={() => setVisible(!visible)}
                buttonImg={
                  visible ? ic_visibility_on_24dp : ic_visibility_off_24dp
                }
              />
            </div>
            <div className={cn(styles.inputWrapper)}>
              <label>닉네임</label>
              <TextInput value="1234" textInputState={TextInputState.기본값} />
            </div>
            <div className={cn(styles.btnList)}>
              <Button
                buttonName={"회원가입하기"}
                buttonType={ButtonType.기본}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
