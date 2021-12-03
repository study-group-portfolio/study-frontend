import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { baseTheme } from "./../theme";
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

const BackBtn = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
  font-weight: bold;
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

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    color: ${(props) => props.theme.grayColors.gray500};
    font-size: 16px;
  }

  input {
    width: 400px;
    height: 48px;
    border: 1px solid #e0edef;
    border-radius: 6px;
    margin-bottom: 20px;
    padding-left: 15px;
    font-size: 16px;
    color: #98a2b3;

    :nth-of-type(2) {
      margin-bottom: 6px;
    }

    :nth-of-type(3) {
      margin-bottom: 40px;
    }

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #98a2b3;
      font-size: 16px;
    }
  }

  p {
    color: ${(props) => props.theme.grayColors.gray500};
    font-size: 14px;
    margin-bottom: 20px;
  }

  button {
    width: 400px;
    height: 48px;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
`;

function EmailSignin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <Wrapper>
        <BackBtn to="/signin">뒤로가기</BackBtn>
        <PageTitle>
          <h1>회원가입</h1>
          <p>
            반갑습니다.
            <br />
            열정적인 멤버들이 기다리고 있어요!
          </p>
        </PageTitle>
        <SigninForm>
          <label htmlFor="email">이메일</label>
          <input type="email" placeholder="example@studyit.com"></input>
          <label htmlFor="password">비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력해주세요"></input>
          <p>영문/숫자/특수문자 조합, 8자~32자</p>
          <label htmlFor="password">비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          ></input>
          <button type="submit">회원가입하기</button>
        </SigninForm>
      </Wrapper>
    </Container>
  );
}

export default EmailSignin;
