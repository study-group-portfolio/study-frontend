import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import PageTitle from "../components/PageTitle";

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

const BackBtn = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;

  .email-input {
    margin-bottom: 20px;
  }

  .input-wrapper {
    position: relative;
    label {
      margin-top: 20px;
      margin-bottom: 8px;
      color: ${(props) => props.theme.grayColors.gray500};
      font-size: 16px;
    }

    input {
      width: 400px;
      height: 48px;
      border: 1px solid #e0edef;
      border-radius: 6px;
      padding-left: 15px;
      font-size: 16px;
      color: ${(props) => props.theme.grayColors.gray900};

      :nth-of-type(2) {
        margin-bottom: 6px;
      }

      :nth-of-type(3) {
        margin-bottom: 6px;
      }

      :focus {
        outline: none;
      }

      ::placeholder {
        color: #98a2b3;
        font-size: 16px;
      }
    }

    .help-text {
      color: ${(props) => props.theme.grayColors.gray500};
      font-size: 14px;
    }

    button {
      width: 400px;
      height: 48px;
      background-color: ${(props) => props.theme.primaryColor};
      opacity: 50%;
      border-radius: 6px;
      border: none;
      color: #fff;
      font-size: 16px;
      margin-top: 40px;
      cursor: pointer;
    }
  }

  .error-message {
    font-size: 14px;
    margin-top: 6px;
    color: ${(props) => props.theme.alertColors.error.text};
  }
`;

interface SigninFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const EmailSignin: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SigninFormValues>();
  const onSubmit = (data: SigninFormValues) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "비밀번호가 일치하지 않습니다." });
    }
  };
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
        <BackBtn to="/signin">
          <IoChevronBack style={{ marginRight: 10 }} />
          이전으로
        </BackBtn>
        <PageTitle
          title="회원가입"
          expFirst="반갑습니다."
          expSecond="열정적인 멤버들이 기다리고 있어요!"
        />
        <SigninForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">이메일</label>
          <div className="input-wrapper email-input">
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
            <p className="error-message">{errors?.email?.message}</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
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
            ></input>
            <span onClick={handleVisibility}>
              {passwordType.visible ? (
                <FaEye
                  style={{
                    position: "absolute",
                    right: 12,
                    bottom: 35,
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
                    bottom: 35,
                    width: 24,
                    height: 24,
                    color: "#98a2b3",
                  }}
                />
              )}
            </span>
            <p className="help-text">영문/숫자/특수문자 조합, 8자~32자</p>
            <p className="error-message">{errors?.password?.message}</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              {...register("confirmPassword")}
              style={
                errors.confirmPassword
                  ? { border: "1px solid #f36355" }
                  : { border: "1px solid #e4e7ec" }
              }
            ></input>
            <p className="error-message">{errors?.confirmPassword?.message}</p>
            <button type="submit">회원가입하기</button>
          </div>
        </SigninForm>
      </Wrapper>
    </Container>
  );
};

export default EmailSignin;
