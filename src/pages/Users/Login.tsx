import React, { useState } from "react";
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
  Path,
} from "utils/enum";
// Components
import TextInput from "components/common/TextInput";
import Button from "components/common/Button";
// Icons
import ic_visibility_on_24dp from "images/icon/ic_visibility_on_24dp.svg";
import ic_visibility_off_24dp from "images/icon/ic_visibility_off_24dp.svg";
import { postLogin, getMyProfile } from "api/userAPI";
import { getAlarmList } from "api/alarmAPI";
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login } from 'redux/login/loginSlice';
import { edit } from 'redux/member/memberSlice';
import { add } from 'redux/alarm/alarmSlice';
import { useGoPage } from 'utils/custom-hook';
import store, { RootState, AppDispatch} from "redux/store";
interface ILoginInputs {
  email: string;
  password: string;
}

export default function Login(loginInputs: ILoginInputs) {
  const state = useSelector((state: RootState) => state.loginStore)
  const dispatch = useDispatch<AppDispatch>();
  const goMainPage = useGoPage(Path.메인);

  const [visible, setVisible] = useState(false);
  // Input Value
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailStatus, setEmailStatus] = useState<TextInputState>(TextInputState.기본값);
  const [passwordStatus, setPasswordStatus] = useState<TextInputState>(TextInputState.기본값);

  const validateLogin = (email: string, password: string): boolean  => {
    if (!email) {
      setEmailStatus(TextInputState.오류);
      return false;
    }

    if (!password) {
      setPasswordStatus(TextInputState.오류);
      return false;
    }

    return true;
  }

  async function onClickLogin(loginInput: ILoginInputs) {
    if (validateLogin(email, password)) {
      try {
        const { data: { data: loginInfo } } = await postLogin(loginInput);
        dispatch(login(loginInfo));
        const { data: { data: memberInfo}} = await getMyProfile();
        dispatch(edit(memberInfo));
        const { data: { data: alarmList }} = await getAlarmList();
        dispatch(add(alarmList));

        console.log(store.getState());
        goMainPage();
      } catch (error) {
        console.error(error);
      }
    }
  }

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
        <div className={cn(styles.loginForm)}>
          <div className={cn(styles.inputWrapper)}>
            <label>이메일</label>
            <TextInput
              placeholder={"example@studyit.com"}
              type={InputType.텍스트형}
              textInputState={emailStatus}
              errorText={"올바른 이메일을 입력해 주세요."}
              textInputType={TextInputType.일반형}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>
          <div className={cn(styles.inputWrapper)}>
            <label>비밀번호</label>
            <TextInput
              type={visible ? InputType.텍스트형 : InputType.패스워드형}
              placeholder="비밀번호를 입력해주세요"
              textInputType={TextInputType.아이콘형}
              textInputState={passwordStatus}
              errorText={"올바른 비밀번호를 입력해 주세요."}
              onClick={() => setVisible(!visible)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              buttonImg={
                visible ? ic_visibility_on_24dp : ic_visibility_off_24dp
              }
            />
          </div>
            <div className={cn(styles.btnList)}>
              <Button
                buttonName={"이메일로 로그인하기"}
                buttonType={ButtonType.기본}
                onClick={() => onClickLogin({ email, password })}
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
        </div>
        <div className={cn(styles.utilityMenus)}>
          <Link to={Path.회원가입}>아직 회원이 아니신가요?</Link>
          <Link to={Path.비밀번호_찾기}>비밀번호 찾기</Link>
        </div>
      </div>
    </section>
  );
}
