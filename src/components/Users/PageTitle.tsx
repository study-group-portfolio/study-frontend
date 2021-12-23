import { FunctionComponent } from "react";
import styled from "styled-components";

const TitleSection = styled.div`
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

interface IPageTitle {
  title: string;
  expFirst: string;
  expSecond?: string;
}

const PageTitle: FunctionComponent<IPageTitle> = ({
  title,
  expFirst,
  expSecond,
}) => {
  return (
    <TitleSection>
      <h1>{title}</h1>
      <p>
        {expFirst}
        <br />
        {expSecond}
      </p>
    </TitleSection>
  );
};

export default PageTitle;
