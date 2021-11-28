import styled from "styled-components";
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
  padding-left: 15px;
  font-size: 16px;
  color: #98a2b3;

  &:focus {
    border: 1px solid #e9edef;
  }

  &::placeholder {
    font-size: 16px;
    color: #98a2b3;
  }
`;

const LoginBtn = styled.button`
  width: 400px;
  height: 48px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  background-color: transparent;
  border-style: none;
  color: #c4c4c4;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    background-color: #c4c4c4;
    transition: 0.4s ease-in-out;
    color: #fff;
  }
`;

const KakaoLoginBtn = styled(LoginBtn)`
  border: 1px solid #efc046;
  background-color: transparent;
  margin-top: 12px;
  color: #c4c4c4;
  &:hover {
    background-color: #efc046;
    transition: 0.4s ease-in-out;
    color: #fff;
  }
`;

const GoogleLoginBtn = styled(KakaoLoginBtn)`
  border: 1px solid #de5246;
  background-color: transparent;
  margin-top: 12px;
  color: #c4c4c4;
  &:hover {
    background-color: #de5246;
    color: #fff;
  }
`;

const UtilityBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const UtilityMenu = styled.a`
  font-size: 14px;
  color: #c4c4c4;
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
        </Form>
        <LoginBtn>이메일로 로그인하기</LoginBtn>
        <KakaoLoginBtn>카카오로 로그인하기</KakaoLoginBtn>
        <GoogleLoginBtn>구글로 로그인하기</GoogleLoginBtn>
        <UtilityBox>
          <UtilityMenu>
            <Link to="/signin-ready">아직 회원이 아니신가요?</Link>
          </UtilityMenu>
          <UtilityMenu>
            <Link to="/find-password">비밀번호 찾기</Link>
          </UtilityMenu>
        </UtilityBox>
      </Wrapper>
    </Container>
  );
}

export default Login;
