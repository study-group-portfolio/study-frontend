import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import axios from "axios";
// CSS
import styles from "../../css/Auth/Form.module.scss";
// Icons
import ic_visibility_on_24dp from "images/icon/ic_visibility_on_24dp.svg";
import ic_visibility_off_24dp from "images/icon/ic_visibility_off_24dp.svg";
// Components
import AuthLayout from "components/Auth/AuthLayout";
import FormTop from "components/Auth/FromTopExp";
import ReactHelmet from "components/common/Helmet";
import FormInput from "components/Auth/FormInput";
import FormButton from "components/Auth/FormButton";
import { SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { BASE_URL } from "../../app/App";
import { useGoPage } from "utils/custom-hook";
import { Path } from "../../utils/enum";
// API

interface ISignupInputs {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    watch,
  } = useForm<ISignupInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
    },
  });

  const goMainPage = useGoPage(Path.메인);

  const [submitting, setSubmitting] = useState(false);

  const postSignup = async () => {
    await axios.post(`http://localhost:8080/api/member/signup`);
  };

  const onFormSubmit: SubmitHandler<ISignupInputs> = async () => {
    const { email, password, confirmPassword, nickname } = getValues();
    const res = await axios.post(`http://localhost:8080/api/member/signup`, {
      email,
      password,
      confirmPassword,
      nickname,
    });
    const data = await res.json();
    console.log(data);
    // goMainPage();
  };

  const onFormSubmitError: SubmitErrorHandler<ISignupInputs> = (e: any) => {
    console.log(e);
  };

  return (
    <AuthLayout>
      <ReactHelmet description="로그인 화면" title="회원가입" />
      <FormTop
        formTopTitle="회원가입"
        formTopText="반갑습니다.\n 열정적인 멤버들이 기다리고 있어요!"
      />
      <form onSubmit={handleSubmit(onFormSubmit, onFormSubmitError)}>
        <FormInput
          {...register("email", {
            required: "올바른 이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
            validate:
              {
                emailAlreadyExists: async (v: string) =>
                  await axios.get(
                    `http://localhost:8080/api/member/signup/${v}`
                  ),
              } || "이미 사용 중인 이메일입니다.",
          })}
          labelText="이메일"
          placeholder="example@studyit.com"
          hasError={Boolean(errors?.email)}
          name="email"
        />
        {errors?.email && (
          <span className={cn(styles.errorText)}>{errors?.email.message}</span>
        )}
        <FormInput
          {...register("password", {
            required: "올바른 비밀번호를 입력해 주세요.",
            minLength: {
              value: 8,
              message: "올바른 비밀번호를 입력해 주세요.",
            },
            maxLength: {
              value: 32,
              message: "올바른 비밀번호를 입력해 주세요.",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "올바른 비밀번호를 입력해 주세요.",
            },
          })}
          labelText="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          type="password"
          hasError={Boolean(errors?.password)}
          helpText="영문/숫자/특수문자 조합, 8자~32자"
          name="password"
        />
        {errors?.password && (
          <span className={cn(styles.errorText)}>
            {errors?.password.message}
          </span>
        )}
        <FormInput
          {...register("confirmPassword", {
            required: "비밀번호가 일치하지 않습니다.",
            validate: {
              passwordMatch: (v: string) =>
                v === watch("password") || "비밀번호가 일치하지 않습니다.",
            },
          })}
          labelText="비밀번호 확인"
          hasError={Boolean(errors?.confirmPassword)}
          placeholder="비밀번호를 한 번 더 입력해 주세요."
          type="password"
          name="confirmPassword"
        />
        {errors?.confirmPassword && (
          <span className={cn(styles.errorText)}>
            {errors?.confirmPassword.message}
          </span>
        )}
        <FormInput
          {...register("nickname", {
            required: "올바른 닉네임을 입력해 주세요.",
            maxLength: {
              value: 10,
              message: "올바른 닉네임을 입력해 주세요.",
            },
            validate: {
              nicknameAlreadyExists: async (v: string) =>
                (await axios.get(
                  `http://localhost:8080/api/member/checkNickname/${v}`
                )) || "이미 사용 중인 닉네임입니다.",
            },
          })}
          labelText="닉네임"
          hasError={Boolean(errors?.nickname)}
          placeholder="닉네임을 입력해 주세요."
          type="text"
          helpText="한글/영어/숫자 혼용가능, 최대 10자"
          name="nickname"
        />
        {errors?.nickname && (
          <span className={cn(styles.errorText)}>
            {errors?.nickname.message}
          </span>
        )}
        <FormButton text="회원가입하기" disabled={!isValid} />
      </form>
    </AuthLayout>
  );
}
