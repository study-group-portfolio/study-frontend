import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  .email-input {
    margin-bottom: 20px;
  }

  .input-wrapper {
    position: relative;

    label {
      display: inline-block;
      margin-bottom: 8px;
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

      button {
        position: absolute;
      }
    }
  }

  .error-message {
    margin-top: 6px;
    font-size: 14px;
    color: ${(props) => props.theme.alertColors.error.text};
  }
`;

const UtilityBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: ${(props) => props.theme.grayColors.gray500};
`;

interface ILoginForm {
  email: string;
  password: string;
}

const Login: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  // Password visibility toggle
  const [passwordType, setPasswordType] = useState({
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
  return (
    <Container>
      <Wrapper>
        <PageTitle
          title="로그인"
          expFirst="환영합니다."
          expSecond="로그인 후 스터딧해보세요!"
        />
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper email-input">
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
              name="email"
            ></input>
            <p className="error-message">{errors?.email?.message}</p>
          </div>
          <div className="input-wrapper">
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
            ></input>
            <span onClick={handleVisibility}>
              {passwordType.visible ? (
                <FaEye
                  style={{
                    position: "absolute",
                    right: 12,
                    bottom: 14,
                    width: 24,
                    height: 24,
                    color: "#98a2b3",
                  }}
                />
              ) : (
                <FaEyeSlash
                  style={{
                    position: "absolute",
                    right: 12,
                    bottom: 14,
                    width: 24,
                    height: 24,
                    color: "#98a2b3",
                  }}
                />
              )}
            </span>
          </div>
          <p className="error-message">{errors?.password?.message}</p>
          <Button
            emailText="이메일로 로그인하기"
            kakaoText="카카오로 로그인하기"
            googleText="구글로 로그인하기"
            emailTo="/signin"
            kakaoTo="/"
            googleTo="/"
          />
        </LoginForm>
        <UtilityBox>
          <StyledLink to="/signin">아직 회원이 아니신가요?</StyledLink>
          <StyledLink to="/find-password">비밀번호 찾기</StyledLink>
        </UtilityBox>
      </Wrapper>
    </Container>
  );
};

export default Login;
