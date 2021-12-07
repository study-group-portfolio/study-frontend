import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
`;

const PageTitle = styled.div`
  h1 {
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 15px;
    align-self: left;
    color: ${(props) => props.theme.grayColors.gray900};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme.grayColors.gray500};
  }
`;

const SigninForm = styled.div`
  margin-top: 40px;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 20px;
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
      color: #98a2b3;

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
      margin-bottom: 6px;
    }

    .error-message {
      font-size: 14px;
      color: ${(props) => props.theme.alertColors.error.text};
    }

    button {
      width: 400px;
      height: 48px;
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 6px;
      color: #fff;
      font-size: 16px;
      margin-top: 40px;
      cursor: pointer;
    }
  }
`;

interface SigninFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

function EmailSignin() {
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

  return (
    <Container>
      <Wrapper>
        <BackBtn to="/signin">뒤로가기</BackBtn>
        <PageTitle>
          <h1>회원가입</h1>
          <p>
            반갑습니다.
            <br />
            열정적인 멤버들이 기다리고 있어요!
          </p>
        </PageTitle>
        <SigninForm>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            />
            <p className="error-message">{errors?.email?.message}</p>
            <label>비밀번호</label>
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
            ></input>
            <p className="help-text">영문/숫자/특수문자 조합, 8자~32자</p>
            <p className="error-message">{errors?.password?.message}</p>
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              {...register("confirmPassword")}
            ></input>
            <p className="error-message">{errors?.confirmPassword?.message}</p>
            <button type="submit">회원가입하기</button>
          </form>
        </SigninForm>
      </Wrapper>
    </Container>
  );
}

export default EmailSignin;
