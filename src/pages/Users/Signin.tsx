import { useState } from "react";
import styled, { css } from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import PageTitle from "../../components/Users/PageTitle";
import BackBtn from "../../components/Users/BackBtn";

interface ISigninFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

function EmailSignin({
  email,
  password,
  confirmPassword,
  nickname,
}: ISigninFormValues) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISigninFormValues>();

  const onSubmit: SubmitHandler<ISigninFormValues> = (
    data: ISigninFormValues
  ) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "비밀번호가 일치하지 않습니다." });
    }
  };

  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const [confirmPasswordType, setConfirmPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const handleVisibility = (event: any) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const handleConfirmPasswordVisibility = (event: any) => {
    setConfirmPasswordType(() => {
      if (!confirmPasswordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  return (
    <Container>
      <Wrapper>
        <BackBtn to="/signin" />
        <PageTitle
          title="회원가입"
          expFirst="반갑습니다."
          expSecond="열정적인 멤버들이 기다리고 있어요!"
        />
        <SigninForm onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="email">이메일</label>
            <input
              placeholder="example@studyit.com"
              {...register("email", {
                required: "올바른 이메일을 입력해주세요.",
                pattern: {
                  value: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
                  message: "올바른 이메일을 입력해주세요.",
                },
              })}
              style={
                errors.email
                  ? { border: "1px solid #f36355" }
                  : { border: "1px solid #e4e7ec" }
              }
            />
          </div>
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="email"
            as="p"
          />
          {/* <p className="error-message">{errors?.email?.message}</p> */}

          <div className="input-wrapper password-input">
            <label htmlFor="password">비밀번호</label>
            <input
              type={passwordType.type}
              placeholder="비밀번호를 입력해주세요"
              {...register("password", {
                required: "올바른 비밀번호를 입력해주세요.",
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                  message: "올바른 비밀번호를 입력해주세요.",
                },
              })}
              style={
                errors.password
                  ? { border: "1px solid #f36355" }
                  : { border: "1px solid #e4e7ec" }
              }
              name="password"
            />
            <span onClick={handleVisibility}>
              {passwordType.visible ? <HelpEyeOpen /> : <HelpEyeClose />}
            </span>
          </div>
          <p className="help-text">영문/숫자/특수문자 조합, 8자~32자</p>
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="password"
            as="p"
          />

          <div className="input-wrapper">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type={confirmPasswordType.type}
              placeholder="비밀번호를 한번 더 입력해주세요"
              {...register("confirmPassword")}
              style={
                errors.confirmPassword
                  ? { border: "1px solid #f36355" }
                  : { border: "1px solid #e4e7ec" }
              }
              name="confirmPassword"
            />
            <span onClick={handleConfirmPasswordVisibility}>
              {confirmPasswordType.visible ? <EyeOpen /> : <EyeClose />}
            </span>
          </div>
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="confirmPassword"
            as="p"
          />

          <div className="input-wrapper">
            <label htmlFor="nickname">닉네임</label>
            <input
              placeholder="닉네임을 입력해 주세요"
              {...register("nickname", {
                required: "올바른 닉네임을 입력해 주세요.",
              })}
              style={
                errors.nickname
                  ? { border: "1px solid #f36355" }
                  : { border: "1px solid #e4e7ec" }
              }
              maxLength={10}
              name="nickname"
            />
          </div>
          <p className="help-text">한글/영어/숫자 혼용 가능, 최대 10자</p>
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="nickname"
            as="p"
          />
          {errors.email ||
          errors.confirmPassword ||
          errors.password ||
          errors.nickname ? (
            <button>회원가입하기</button>
          ) : (
            <button style={{ opacity: 1 }}>회원가입하기</button>
          )}
        </SigninForm>
      </Wrapper>
    </Container>
  );
}

export default EmailSignin;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;

  .help-text {
    display: inline-block;
    color: ${(props) => props.theme.grayColors.gray500};
    font-size: 14px;
    margin-top: 6px;
  }

  .input-wrapper {
    position: relative;
    width: 400px;

    label {
      display: block;
      margin-bottom: 8px;
      margin-top: 20px;
      color: ${(props) => props.theme.grayColors.gray500};
      font-size: 16px;
    }

    input {
      width: 400px;
      height: 48px;
      border: 1px solid ${(props) => props.theme.grayColors.gray200};
      border-radius: 6px;
      padding-left: 15px;
      font-size: 16px;
      color: ${(props) => props.theme.grayColors.gray900};

      :focus {
        outline: none;
      }

      ::placeholder {
        color: #98a2b3;
        font-size: 16px;
      }
    }
  }

  .error-message {
    font-size: 14px;
    margin-top: 6px;
    color: ${(props) => props.theme.alertColors.error.text};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 48px;
    background-color: ${(props) => props.theme.primaryColor};
    opacity: 0.5;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    margin-top: 20px;
  }
`;

const StyledEyeIcon = css`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.grayColors.gray400};
  position: absolute;
  right: 12px;
`;

const EyeOpen = styled(FaEye)`
  ${StyledEyeIcon};
  bottom: 14px;
`;

const EyeClose = styled(FaEyeSlash)`
  ${StyledEyeIcon};
  bottom: 14px;
`;

const HelpEyeOpen = styled(FaEye)`
  ${StyledEyeIcon};
  bottom: 10px;
`;

const HelpEyeClose = styled(FaEyeSlash)`
  ${StyledEyeIcon};
  bottom: 10px;
`;
