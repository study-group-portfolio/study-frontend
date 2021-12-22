import styled from "styled-components";
import { ReactComponent as Kakao } from "../../images/kakao.svg";
import { ReactComponent as Google } from "../../images/google.svg";

interface IButtonText {
  text: string;
  style?: {};
}

export function Button({ text }: IButtonText) {
  return <StyledButton>{text}</StyledButton>;
}

export function KakaoButton({ text }: IButtonText) {
  return (
    <KakaoStyledButton>
      <KakaoLogo />
      {text}
    </KakaoStyledButton>
  );
}

export function GoogleButton({ text }: IButtonText) {
  return (
    <GoogleStyledButton>
      <GoogleLogo />
      {text}
    </GoogleStyledButton>
  );
}

// Styled components

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 48px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
`;

const KakaoStyledButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.kakaoColor};
  color: ${(props) => props.theme.grayColors.gray900};
  margin-top: 12px;
`;

const KakaoLogo = styled(Kakao)`
  margin-right: 10px;
`;

const GoogleStyledButton = styled(KakaoStyledButton)`
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.grayColors.gray200};
`;

const GoogleLogo = styled(Google)`
  margin-right: 10px;
`;
