import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Kakao } from "../images/kakao.svg";
import { ReactComponent as Google } from "../images/google.svg";
import { IoChevronBack } from "react-icons/io5";

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

const KakaoStyledLink = styled(StyledLink)`
  background-color: ${(props) => props.theme.kakaoColor};
  margin-top: 12px;
  color: ${(props) => props.theme.grayColors.gray900};
`;

const KakaoLogo = styled(Kakao)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

const GoogleLogo = styled(Google)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

const GoogleStyledLink = styled(StyledLink)`
  background-color: transparent;
  margin-top: 12px;
  border: 1px solid ${(props) => props.theme.grayColors.gray200};
  color: ${(props) => props.theme.grayColors.gray900};
`;

function SigninReady() {
  return (
    <Container>
      <Wrapper>
        <BackBtn to="/login">
          <IoChevronBack style={{ marginRight: 10 }} />
          이전으로
        </BackBtn>
        <PageTitle>
          <h1>회원가입</h1>
          <p>
            반갑습니다.
            <br />
            열정적인 멤버들이 가디라고 있어요!
          </p>
        </PageTitle>
        <StyledLink to="signin/email">이메일로 시작하기</StyledLink>
        <KakaoStyledLink to="/">
          <KakaoLogo />
          카카오로 시작하기
        </KakaoStyledLink>
        <GoogleStyledLink to="/">
          <GoogleLogo />
          구글로 시작하기
        </GoogleStyledLink>
      </Wrapper>
    </Container>
  );
}

export default SigninReady;
