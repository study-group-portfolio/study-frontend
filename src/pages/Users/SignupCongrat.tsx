import styled from "styled-components";
import PageTitle from "../../components/Users/PageTitle";
import { Button, GoogleButton } from "../../components/Users/Button";

export default function SignupCongratulation() {
  return (
    <Container>
      <Wrapper>
        <PageTitle
          title="회원가입이 완성되었습니다. 프로필을 완성해보세요!"
          expFirst="프로필을 완성하면 스터디 매칭율이 더 높아져요."
        />
        <Button text="프로필 완성하러가기" />
        <button className="go-home">홈으로 가기</button>
      </Wrapper>
    </Container>
  );
}

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

  .go-home {
    width: 400px;
    height: 48px;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.grayColors.gray200};
    margin-top: 10px;
  }
`;
