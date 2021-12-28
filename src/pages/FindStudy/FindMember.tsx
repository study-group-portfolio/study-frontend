import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../../components/FindStudy/Utilities/Banner";
import { MemberToolTipBox } from "../../components/FindStudy/Utilities/ToolTipBox";
import { BiInfoCircle } from "react-icons/bi";
import MemberCard from "../../components/FindStudy/Utilities/MemberCard";
import { ReactComponent as Search } from "../../images/search.svg";
// Dummy Data
import rawData from "../../rawData.json";

function FindMemberDetail() {
  const [showToolTip, setShowToolTip] = useState(false);
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>): void => {
    setShowToolTip(true);
  };
  const handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>): void => {
    setShowToolTip(false);
  };

  const [members, setMembers] = useState([]);
  return (
    <>
      <Banner
        mainText="함께 달릴 멤버를\n직접 선택해 보세요"
        subText="함께 성장할 멤버들을 직접 골라보는 건 어때요?\n준비된 멤버들이 기다리고 있어요"
        BannerImage={Search}
      />
      <MainSection>
        <article>
          <div className="label">
            <div className="title">
              <h1>멤버 찾기</h1>
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
            {rawData.members.map((member) => (
              <MemberCard
                name={member.name}
                position={member.position}
                interested={member.interested}
              />
            ))}
          </div>
        </article>
      </MainSection>
    </>
  );
}

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

const InfoCircle = styled(BiInfoCircle)`
  display: inline-block;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.grayColors.gray400};
  cursor: pointer;
`;
