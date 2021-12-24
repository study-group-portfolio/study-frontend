import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiInfoCircle } from "react-icons/bi";
import MemberCard from "./Utilities/MemberCard";
import { MemberToolTipBox } from "./Utilities/ToolTipBox";

// Components
interface IFindStudySection {
  titleText: string;
  to?: string;
}

const FindMemberDetail: React.FunctionComponent<IFindStudySection> = ({
  titleText,
  to,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>): void => {
    setShowToolTip(true);
  };
  const handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>): void => {
    setShowToolTip(false);
  };
  return (
    <MainSection>
      <article>
        <div className="label">
          <div className="title">
            <h1>{titleText}</h1>
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <InfoCircle />
              {showToolTip ? (
                <MemberToolTipBox text="최근 업데이트 순으로 노출됩니다." />
              ) : null}
            </span>
          </div>
        </div>
        <div className="wrapper">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </article>
    </MainSection>
  );
};

export default FindMemberDetail;

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
  display: inline-block;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.grayColors.gray400};
  cursor: pointer;
`;
