import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import axios from "axios";
import dotenv from "dotenv";
// CSS
import styles from "../../css/Auth/Form.module.scss";
// Utils
import {
  ButtonType,
  Path,
  InputType,
  TextInputState,
  TextInputType,
} from "utils/enum";
// Icons
import ic_visibility_on_24dp from "images/icon/ic_visibility_on_24dp.svg";
import ic_visibility_off_24dp from "images/icon/ic_visibility_off_24dp.svg";
// Components
import AuthLayout from "components/Auth/AuthLayout";
import FormTop from "components/Auth/FromTopExp";
import ReactHelmet from "components/common/Helmet";
import FormInput from "components/Auth/FormInput";
import TextInput from "components/common/TextInput";
import FormButton from "components/Auth/FormButton";
import { getCheck } from "../../api/userAPI";
import { SubmitHandler } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ISignupInputs>({ mode: "onChange" });

  const onFormSubmit: SubmitHandler<ISignupInputs> = (data: any) => {
    console.log(data);
  };

  async function signup({
    nickname,
    email,
  }: {
    nickname: string;
    email: string;
  }) {
    const alreadyExists = await getCheck({ nickname, email });
    if (alreadyExists) {
      return;
    }
  }

  const REGEX = {
    EMAIL: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/,
    PASSWORD:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    COMMON: /^$|\s+/,
  };

  return (
    <AuthLayout>
      <ReactHelmet description="로그인 화면" title="회원가입" />
      <FormTop
        formTopTitle="회원가입"
        formTopText="반갑습니다.\n 열정적인 멤버들이 기다리고 있어요!"
      />
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormInput
          {...register("email", {
            required: "올바른 이메일을 입력해주세요.",
            validate: {
              validEmailAddressFormat: (v) =>
                !REGEX.EMAIL.test(v) || "올바른 이메일을 입력해주세요.",
            },
          })}
          labelText="이메일"
          placeholder="example@studyit.com"
          hasError={Boolean(errors?.email)}
        />
        {errors?.email && (
          <span className={cn(styles.errorText)}>{errors?.email.message}</span>
        )}
        <FormInput
          labelText="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          type="password"
          helpText="영문/숫자/특수문자 조합, 8자~32자"
        />
        <FormInput
          labelText="비밀번호 확인"
          placeholder="비밀번호를 입력해 주세요."
          type="password"
        />
        <FormInput
          labelText="이메일"
          placeholder="example@studyit.com"
          type="email"
          helpText="한글/영어/숫자 혼용가능, 최대 10자"
        />
        <FormButton text="회원가입하기" />
      </form>
    </AuthLayout>
  );
}
