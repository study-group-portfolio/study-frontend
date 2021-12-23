import React from "react";
import Banner from "../../components/FindStudy/Utilities/Banner";
import ToolTipBox from "../../components/FindStudy/Utilities/ToolTipBox";
import StudyMain from "../../components/FindStudy/StudyMain";
import MemberMainSection from "../../components/FindStudy/MemberMain";
import { ReactComponent as Building } from "../../images/building.svg";

const FindMain: React.FunctionComponent = () => {
  return (
    <>
      <Banner
        mainText="스터딧에서\n스터디 IT 해보세요"
        subText="기획자, 개발자, 디자이너를 위한\nIT 스터디 플랫폼"
        BannerImage={Building}
      />
      <StudyMain titleText="스터디 찾기" to="/find-study">
        <ToolTipBox text="최근 등록 순으로 노출됩니다." />
      </StudyMain>
      <MemberMainSection
        titleText="멤버 찾기"
        to="/find-member"
      ></MemberMainSection>
    </>
  );
};

export default FindMain;
