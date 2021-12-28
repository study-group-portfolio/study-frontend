import { useState } from "react";
import styled, { css } from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import PageTitle from "../../components/Users/PageTitle";
import BackBtn from "../../components/Users/BackBtn";

interface IResetPasswordForm {
  password: string;
  confirmPassword: string;
}

export default function ResetPassword({
  password,
  confirmPassword,
}: IResetPasswordForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IResetPasswordForm>();

  const onSubmit: SubmitHandler<IResetPasswordForm> = (
    data: IResetPasswordForm
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
        <PageTitle
          title="비밀번호 재설정"
          expFirst="새로운 비밀번호를 설정해주세요."
        />
        <SigninForm onSubmit={handleSubmit(onSubmit)}>
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

          <ErrorMessage
            className="error-message"
            errors={errors}
            name="nickname"
            as="p"
          />
          {errors.confirmPassword || errors.password ? (
            <button>재설정하기</button>
          ) : (
            <button style={{ opacity: 1 }}>재설정하기</button>
          )}
        </SigninForm>
      </Wrapper>
    </Container>
  );
}

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
