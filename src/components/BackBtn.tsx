import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";

const BackBtnWrapper = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const StyledBackButton = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`;

interface IStyledBackButton {
  to: string;
}

const BackBtn: FunctionComponent<IStyledBackButton> = ({ to }) => {
  return (
    <BackBtnWrapper>
      <StyledBackButton to={to}>
        <IoChevronBack />
        이전으로
      </StyledBackButton>
    </BackBtnWrapper>
  );
};

export default BackBtn;
