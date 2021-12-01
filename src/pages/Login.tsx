import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

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

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 15px;
  align-self: left;
  color: #212729;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 40px;
  color: #667085;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EmailLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #667085;
`;

const PasswordLabel = styled(EmailLabel)`
  margin-top: 20px;
`;

const Input = styled.input.attrs({
  type: "text",
})`
  width: 400px;
  height: 48px;
  border: 1px solid #e9edef;
  border-radius: 6px;
  padding-left: 15px;
  font-size: 16px;
  color: #101828;

  &:focus {
    outline: 2px solid #e9edef;
  }

  &::placeholder {
    font-size: 16px;
    color: #98a2b3;
  }
`;

const LoginBtn = styled.button`
  width: 400px;
  height: 48px;
  border-radius: 6px;
  border-style: none;
  background-color: ${(props) => props.theme.primaryColor};
  margin-top: 40px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
`;

const KakaoLoginBtn = styled(LoginBtn)`
  background-color: #efc046;
  margin-top: 12px;
  color: #fff;
`;

const GoogleLoginBtn = styled(KakaoLoginBtn)`
  background-color: transparent;
  margin-top: 12px;
  color: #212729;
  border: 1px solid #c4c4c4;
`;

const UtilityBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <Desc>
          환영합니다
          <br />
          로그인 후 스터딧해보세요!
        </Desc>
        <Form>
          <EmailLabel>이메일</EmailLabel>
          <Input placeholder="example@studyit.com"></Input>
          <PasswordLabel>비밀번호</PasswordLabel>
          <Input placeholder="비밀번호를 입력해주세요"></Input>
          <FaEye />
        </Form>
        <LoginBtn>이메일로 로그인하기</LoginBtn>
        <KakaoLoginBtn>카카오로 로그인하기</KakaoLoginBtn>
        <GoogleLoginBtn>구글로 로그인하기</GoogleLoginBtn>
        <UtilityBox>
          <Link to="/signin" style={{ color: "#c4c4c4" }}>
            아직 회원이 아니신가요?
          </Link>
          <Link to="/find-password" style={{ color: "#c4c4c4" }}>
            비밀번호 찾기
          </Link>
        </UtilityBox>
      </Wrapper>
    </Container>
  );
}

export default Login;
