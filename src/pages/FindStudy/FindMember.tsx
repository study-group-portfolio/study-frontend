import React from "react";
import Banner from "../../components/FindStudy/Utilities/Banner";
import FindMemberDetail from "../../components/FindStudy/MemberDetail";
import { ReactComponent as Search } from "../../images/search.svg";

const FindMain: React.FunctionComponent = () => {
  return (
    <>
      <Banner
        mainText="함께 달릴 멤버를\n직접 선택해 보세요"
        subText="함께 성장할 멤버들을 직접 골라보는 건 어때요?\n준비된 멤버들이 기다리고 있어요"
        BannerImage={Search}
      />
      <FindMemberDetail titleText="멤버 찾기"></FindMemberDetail>
    </>
  );
};

export default FindMain;
