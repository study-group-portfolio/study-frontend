import styled from "styled-components";

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

const EmailSignin = styled.button`
  width: 400px;
  height: 48px;
  border-radius: 6px;
  color: #fff;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  background-color: #c4c4c4;
`;

const KakaoSignin = styled(EmailSignin)`
  background-color: #efc046;
  border: transparent;
  margin-top: 12px;
  color: #fff;
`;

const GoogleSignin = styled(EmailSignin)`
  border: 1px solid #c4c4c4;
  background-color: transparent;
  margin-top: 12px;
  color: #212729;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Desc>
          반갑습니다.
          <br />
          열정적인 멤버들이 가디라고 있어요!
        </Desc>
        <EmailSignin as="a" href="/signin/email">
          이메일로 시작하기
        </EmailSignin>
        <KakaoSignin>카카오로 시작하기</KakaoSignin>
        <GoogleSignin>구글로 시작하기</GoogleSignin>
      </Wrapper>
    </Container>
  );
}

export default Login;
