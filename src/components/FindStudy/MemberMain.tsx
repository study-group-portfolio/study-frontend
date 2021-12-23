import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import MemberCard from "./Utilities/MemberCard";

// Components
interface IFindMainSection {
  titleText: string;
  to: string;
}

const MemberMainSection: React.FunctionComponent<IFindMainSection> = ({
  titleText,
  to,
}) => {
  return (
    <MainSection>
      <article>
        <LeftArrow />
        <div className="label">
          <div className="title">
            <h1>{titleText}</h1>
            <InfoCircle />
          </div>
          <ViewAllBtn to={to}>전체보기</ViewAllBtn>
        </div>
        <div className="wrapper">
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
        <RightArrow />
      </article>
    </MainSection>
  );
};

export default MemberMainSection;

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

const LeftArrow = styled(FaChevronLeft)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.grayColors.gray400};
  position: absolute;
  top: 50%;
  left: -5%;
  cursor: pointer;
`;

const RightArrow = styled(FaChevronRight)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.grayColors.gray400};
  position: absolute;
  top: 50%;
  right: -5%;
  cursor: pointer;
`;

const InfoCircle = styled(BiInfoCircle)`
  display: block;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.grayColors.gray400};
  cursor: pointer;
`;
