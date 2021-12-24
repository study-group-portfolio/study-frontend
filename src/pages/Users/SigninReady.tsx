import styled from "styled-components";
import BackBtn from "../../components/Users/BackBtn";
import { Link } from "react-router-dom";
import { GoogleButton, KakaoButton } from "../../components/Users/Button";

function SigninReady() {
  return (
    <Container>
      <Wrapper>
        <BackBtn to="/login" />
        <PageTitle>
          <h1>회원가입</h1>
          <p>
            반갑습니다.
            <br />
            열정적인 멤버들이 가디라고 있어요!
          </p>
        </PageTitle>
        <StyledLink to="/signin-email">이메일로 시작하기</StyledLink>
        <KakaoButton text="카카오로 시작하기" />
        <GoogleButton text="구글로 시작하기" />
      </Wrapper>
    </Container>
  );
}

export default SigninReady;

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

const StyledLink = styled(Link)`
  width: 400px;
  height: 48px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
`;
