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
  border-radius: 6px;
  padding: 0 15px;
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

const SigninBtn = styled.button`
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

function EmailSignin() {
  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Desc>
          반갑습니다.
          <br />
          열정적인 멤버들이 기다리고 있어요!
        </Desc>
        <Form>
          <EmailLabel>이메일</EmailLabel>
          <Input placeholder="example@studyit.com"></Input>
          <PasswordLabel>비밀번호</PasswordLabel>
          <Input placeholder="비밀번호를 입력해주세요"></Input>
          <PasswordLabel>비밀번호 확인</PasswordLabel>
          <Input placeholder="비밀번호를 한 번 더 입력해주세요"></Input>
        </Form>
        <SigninBtn>회원가입하기</SigninBtn>
      </Wrapper>
    </Container>
  );
}

export default EmailSignin;
