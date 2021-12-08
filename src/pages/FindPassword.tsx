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
      margin-bottom: 8px;
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
      margin-top: 6px;
    }

    button {
      width: 400px;
      height: 48px;
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 6px;
      border: none;
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
        <BackBtn to="/login">뒤로가기</BackBtn>
        <PageTitle>
          <h1>비밀번호 찾기</h1>
          <p>
            비밀번호를 재설정하기 위한 링크를 이메일로 보내드릴게요.
            <br />
            가입 시 사용한 이메일 주소를 정확히 입력해주세요.
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
            <button type="submit">이메일로 링크 받기</button>
          </form>
        </SigninForm>
      </Wrapper>
    </Container>
  );
}

export default EmailSignin;
