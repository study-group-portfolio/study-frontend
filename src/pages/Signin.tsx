import styled from "styled-components";
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

const PasswordHelpText = styled.p`
  color: #667085;
  font-size: 14px;
  margin-top: 6px;
`;

const EmailInput = styled.input`
  width: 400px;
  height: 48px;
  border: 1px solid #e9edef;
  border-radius: 6px;
  padding: 0 15px;
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

const PasswordInput = styled(EmailInput)``;

const SigninBtn = styled.button`
  width: 400px;
  height: 48px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  border-style: none;
  color: #fff;
  margin-top: 40px;
  font-size: 16px;
  background-color: #c4c4c4;
  cursor: pointer;
`;

function EmailSignin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Desc>
          반갑습니다.
          <br />
          열정적인 멤버들이 기다리고 있어요!
        </Desc>
        <Form onSubmit={handleSubmit(onValid)}>
          <EmailLabel>이메일</EmailLabel>
          <EmailInput
            {...(register("email"), { required: "이메일을 입력하세요" })}
            placeholder="example@studyit.com"
          ></EmailInput>
          <PasswordLabel>비밀번호</PasswordLabel>
          <PasswordInput
            {...(register("password"),
            {
              required: true,
              minLength: 8,
            })}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          ></PasswordInput>
          <PasswordHelpText>영문/숫자/특수문자 조합, 8자~32자</PasswordHelpText>
          <PasswordLabel>비밀번호 확인</PasswordLabel>
          <PasswordInput
            {...(register("confirmPassword"), { required: true, minLength: 8 })}
            placeholder="비밀번호를 한 번 더 입력해주세요"
            type="password"
          ></PasswordInput>
          <SigninBtn>회원가입하기</SigninBtn>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default EmailSignin;
