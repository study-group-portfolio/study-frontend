import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBackButton = styled(Link)`
    color: ${(props) => props.theme.primaryColor}
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
`;

interface IStyledBackButton {
  to: string;
}

const BackBtn: FunctionComponent<IStyledBackButton> = ({ to }) => {
  return <StyledBackButton to={to}></StyledBackButton>;
};

export default BackBtn;
