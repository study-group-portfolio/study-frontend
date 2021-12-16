import { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Kakao } from "../images/kakao.svg";
import { ReactComponent as Google } from "../images/google.svg";

const ButtonWrapper = styled.div`
  margin-top: 40px;
  width: 400px;
`;

const StyledLink = styled.button`
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

const GoogleStyledLink = styled(StyledLink)`
  background-color: transparent;
  margin-top: 12px;
  border: 1px solid ${(props) => props.theme.grayColors.gray200};
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

interface IButtonProps {
  emailText: string;
  kakaoText?: string;
  googleText?: string;
  emailTo?: string;
  kakaoTo?: string;
  googleTo?: string;
}

const Button: FunctionComponent<IButtonProps> = ({
  emailText,
  kakaoText,
  googleText,
}) => {
  return (
    <ButtonWrapper>
      <StyledLink type="submit">{emailText}</StyledLink>
      <KakaoStyledLink>
        <KakaoLogo />
        {kakaoText}
      </KakaoStyledLink>
      <GoogleStyledLink>
        <GoogleLogo />
        {googleText}
      </GoogleStyledLink>
    </ButtonWrapper>
  );
};

export default Button;
