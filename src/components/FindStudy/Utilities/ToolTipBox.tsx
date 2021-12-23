import React from "react";
import styled from "styled-components";

// Component
interface IToolTipBoxProps {
  text: string;
}

const ToolTipBox: React.FunctionComponent<IToolTipBoxProps> = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default ToolTipBox;

// Styled Components
const Container = styled.div`
  width: fit-content;
  height: 42.14px;
  background-color: ${(props) => props.theme.grayColors.gray600};
  border-radius: 6px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50px;
  left: 33px;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.grayColors.gray600};
    top: 88%;
    left: 45%;
    transform: rotate(45deg);
  }

  p {
    font-size: 12px;
    color: #fff;
  }
`;
