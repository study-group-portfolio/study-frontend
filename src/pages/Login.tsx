import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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
    margin-bottom: 40px;
    color: ${(props) => props.theme.grayColors.gray500};
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    color: ${(props) => props.theme.grayColors.gray500};
    font-size: 16px;

    ::nth-of-type(2) {
      margin-top: 20px;
    }
  }

  input {
    width: 400px;
    height: 48px;
    border: 1px solid #e0edef;
    border-radius: 6px;
    padding-left: 15px;
    margin-bottom: 6px;
    font-size: 16px;
    color: #98a2b3;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #98a2b3;
      font-size: 16px;
    }
  }

  .error-message {
    font-size: 14px;
    color: ${(props) => props.theme.alertColors.error.text};
  }
`;

const EmailLoginBtn = styled.button`
  width: 400px;
  height: 48px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.primaryColor};
  margin-top: 40px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
`;

const KakaoLoginBtn = styled(EmailLoginBtn)`
  color: ${(props) => props.theme.grayColors.gray900};
  background-color: ${(props) => props.theme.kakaoColor};
  margin-top: 12px;
`;

const GoogleLoginBtn = styled(KakaoLoginBtn)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.grayColors.gray200};
`;

const Logo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
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

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };
  return (
    <Container>
      <Wrapper>
        <PageTitle>
          <h1>로그인</h1>
          <p>
            환영합니다.
            <br />
            로그인 후 스터딧해보세요!
          </p>
        </PageTitle>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
          ></input>
          <p className="error-message">{errors?.email?.message}</p>
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
          ></input>
          <p className="error-message">{errors?.password?.message}</p>
          <EmailLoginBtn>이메일로 로그인하기</EmailLoginBtn>
        </LoginForm>
        <KakaoLoginBtn>
          <Logo src="../images/kakao.svg" />
          카카오로 로그인하기
        </KakaoLoginBtn>
        <GoogleLoginBtn>
          <Logo src="../images/google.svg" />
          구글로 로그인하기
        </GoogleLoginBtn>
        <UtilityBox>
          <StyledLink to="/signin">아직 회원이 아니신가요?</StyledLink>
          <StyledLink to="/find-password">비밀번호 찾기</StyledLink>
        </UtilityBox>
      </Wrapper>
    </Container>
  );
}

export default Login;
