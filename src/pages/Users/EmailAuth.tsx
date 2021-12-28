import { Link } from "react-router-dom";
import styled from "styled-components";
import BackBtn from "../../components/Users/BackBtn";
import PageTitle from "../../components/Users/PageTitle";

function EmailAuth() {
  return (
    <Container>
      <Wrapper>
        <BackBtn to="/signin-email" />
        <PageTitle
          title="이메일 인증"
          expFirst="인증 메일을 example@studyit.com으로 코드를 전송했습니다."
          expSecond="받으신 이메일을 열어 버튼을 클릭하면 회원가입이 완료됩니다."
        />
        <div className="help-text">
          <p>인증 메일을 받지 못하셨나요?</p>
          <p>
            스팸보관함 확인 또는{" "}
            <StyledLink to="/email-auth">인증 메일 재전송</StyledLink>
          </p>
        </div>
      </Wrapper>
    </Container>
  );
}

export default EmailAuth;

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

  .help-text {
    text-align: center;
    font-size: 14px;
    line-height: 22px;

    p {
      color: ${(props) => props.theme.grayColors.gray500};
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
`;
