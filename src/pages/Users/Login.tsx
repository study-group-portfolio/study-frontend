import React, { useState, useCallback } from "react";
import { useQuery } from "react-query";
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
// Interfaces
import { IUser } from "../../utils/interface";

interface ILoginInputs {
  email: string;
  password: string;
}

export default function Login(loginInputs: ILoginInputs) {
  const [visible, setVisible] = useState(false);

  // setState for Login
  const [loginUser, setLoginUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  // Validation Check
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onSubmit = (data: any, e: any) => {
    console.log(data, e);
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
              textInputType={TextInputType.아이콘형}
              onClick={() => setVisible(!visible)}
              buttonImg={
                visible ? ic_visibility_on_24dp : ic_visibility_off_24dp
              }
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
          <Link to={Path.회원가입}>아직 회원이 아니신가요?</Link>
          <Link to={Path.비밀번호_찾기}>비밀번호 찾기</Link>
        </div>
      </div>
    </section>
  );
}
