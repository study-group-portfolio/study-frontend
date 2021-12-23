import React from "react";
import Banner from "../../components/FindStudy/Utilities/Banner";
import FindStudyDetail from "../../components/FindStudy/StudyDetail";
import { ReactComponent as Study } from "../../images/study.svg";

const FindMain: React.FunctionComponent = () => {
  return (
    <>
      <Banner
        mainText="함께 하실 스터디를\n직접 선택해 보세요"
        subText="나에게 맞는 스터디를 찾는 데에 지쳤다면\n스터딧에서 해결할 수 있을 거에요."
        BannerImage={Study}
      />
      <FindStudyDetail titleText="스터디 찾기"></FindStudyDetail>
    </>
  );
};

export default FindMain;
