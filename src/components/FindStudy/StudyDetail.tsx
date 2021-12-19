import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiInfoCircle } from "react-icons/bi";
import StudyCard from "./Utilities/StudyCard";

// Components
interface IFindStudySection {
  titleText: string;
  to?: string;
}

const FindStudyDetail: React.FunctionComponent<IFindStudySection> = ({
  titleText,
  to,
}) => {
  return (
    <MainSection>
      <article>
        <div className="label">
          <div className="title">
            <h1>{titleText}</h1>
            <InfoCircle />
          </div>
        </div>
        <div className="wrapper">
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
        </div>
      </article>
    </MainSection>
  );
};

export default FindStudyDetail;

// Styled Components
const MainSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;

  article {
    width: 1160px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 70px;

    .label {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      .title {
        display: flex;

        h1 {
          color: ${(props) => props.theme.grayColors.gray900};
          margin-right: 6px;
        }
      }
    }

    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  }
`;

const ViewAllBtn = styled(Link)`
  display: inline-block;
  font-size: 14px;
  color: ${(props) => props.theme.grayColors.gray500};
`;

const InfoCircle = styled(BiInfoCircle)`
  display: block;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.grayColors.gray400};
  cursor: pointer;
`;
