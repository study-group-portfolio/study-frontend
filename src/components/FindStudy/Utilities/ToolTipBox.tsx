import { isAbsolute } from "path";
import React from "react";
import { BiLock } from "react-icons/bi";
import styled from "styled-components";

// Component
interface IToolTipBoxProps {
  text: string;
}

export const StudyToolTipBox: React.FunctionComponent<IToolTipBoxProps> = ({
  text,
}) => {
  return (
    <StudyContainer>
      <p>{text}</p>
    </StudyContainer>
  );
};

export const MemberToolTipBox: React.FunctionComponent<IToolTipBoxProps> = ({
  text,
}) => {
  return (
    <MemberContainer>
      <p>{text}</p>
    </MemberContainer>
  );
};

// Styled Components
const MemberContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.grayColors.gray600};
  border-radius: 6px;
  padding: 10px;
  display: block;
  position: absolute;
  top: -45px;
  left: 0;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.grayColors.gray600};
    top: 83%;
    left: 45%;
    transform: rotate(45deg);
  }

  p {
    font-size: 12px;
    color: #fff;
  }
`;

const StudyContainer = styled(MemberContainer)`
  left: 33px;
`;
