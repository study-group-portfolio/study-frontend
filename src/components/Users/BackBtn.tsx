import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";

const StyledBackButton = styled(Link)`
  display: inline-block;
  display: flex;
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
  font-weight: bold;
`;

interface IStyledBackButton {
  to: string;
}

const BackBtn: React.FunctionComponent<IStyledBackButton> = ({ to }) => {
  return (
    <StyledBackButton to={to}>
      <IoChevronBack />
      이전으로
    </StyledBackButton>
  );
};

export default BackBtn;
