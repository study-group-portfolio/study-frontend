import React, { useState } from "react";
import Banner from "../../components/FindStudy/Banner";
import Slider from "components/common/Slider";
import MemberCard from "components/common/MemberCard";
import StudyCard from "components/common/StudyCard";
import MemberMainSection from "../../components/FindStudy/MemberMain";
import { StudyCardType, RecruitType, StudyType, ProcessType } from "utils/enum";
import { PositionState } from "utils/interface";
import { ReactComponent as Building } from "../../images/building.svg";
import img_testuser_01 from "images/img/img_testuser_01.svg";
import img_testuser_02 from "images/img/img_testuser_02.svg";

const FindMain: React.FunctionComponent = () => {
  const [bookMark1, setBookMark1] = useState(false);
  const [bookMark2, setBookMark2] = useState(false);
  const [bookMark3, setBookMark3] = useState(false);
  const [bookMark4, setBookMark4] = useState(false);
  const [bookMark5, setBookMark5] = useState(false);

  const [bookMark6, setBookMark6] = useState(false);
  const positionStateList: PositionState[] = [
    { name: "백엔드 개발자", currentNum: 1, totalNum: 1 },
    { name: "프론트엔드 개발자", currentNum: 1, totalNum: 1 },
    { name: "UX/UI 디자이너", currentNum: 0, totalNum: 2 },
  ];

  return (
    <>
      <Banner
        mainText="스터딧에서\n스터디 IT 해보세요"
        subText="기획자, 개발자, 디자이너를 위한\nIT 스터디 플랫폼"
        BannerImage={Building}
      />
      <MemberMainSection
        titleText="스터디 찾기"
        to="/study/findStudy"
      ></MemberMainSection>
      <Slider>
        <StudyCard
          studySeq={0}
          title="포트폴리오용"
          skillTags="#Spring #React.js #JavaScript #jQuer…"
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집중}
          studyType={StudyType.사이드프로젝트}
          processType={ProcessType.온오프라인}
          bookMark={bookMark4}
          onClickBookMark={() => setBookMark4(!bookMark4)}
          currentNum={5}
          totalNum={10}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="알고리즘 스터디 구합니다."
          skillTags="#Spring #React.js "
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집중}
          studyType={StudyType.지식공유및탐구}
          processType={ProcessType.온라인}
          bookMark={bookMark5}
          onClickBookMark={() => setBookMark5(!bookMark5)}
          currentNum={2}
          totalNum={5}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="프론트엔드 스터디"
          skillTags="#Spring #React.js #JavaScript"
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집완료}
          studyType={StudyType.지식공유및탐구}
          processType={ProcessType.오프라인}
          bookMark={bookMark6}
          onClickBookMark={() => setBookMark6(!bookMark6)}
          currentNum={10}
          totalNum={10}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="포트폴리오용"
          skillTags="#Spring #React.js #JavaScript #jQuer…"
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집중}
          studyType={StudyType.사이드프로젝트}
          processType={ProcessType.온오프라인}
          bookMark={bookMark4}
          onClickBookMark={() => setBookMark4(!bookMark4)}
          currentNum={5}
          totalNum={10}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="알고리즘 스터디 구합니다."
          skillTags="#Spring #React.js "
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집중}
          studyType={StudyType.지식공유및탐구}
          processType={ProcessType.온라인}
          bookMark={bookMark5}
          onClickBookMark={() => setBookMark5(!bookMark5)}
          currentNum={2}
          totalNum={5}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="프론트엔드 스터디"
          skillTags="#Spring #React.js #JavaScript"
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집완료}
          studyType={StudyType.지식공유및탐구}
          processType={ProcessType.오프라인}
          bookMark={bookMark6}
          onClickBookMark={() => setBookMark6(!bookMark6)}
          currentNum={10}
          totalNum={10}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="포트폴리오용"
          skillTags="#Spring #React.js #JavaScript #jQuer…"
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집중}
          studyType={StudyType.사이드프로젝트}
          processType={ProcessType.온오프라인}
          bookMark={bookMark4}
          onClickBookMark={() => setBookMark4(!bookMark4)}
          currentNum={5}
          totalNum={10}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="알고리즘 스터디 구합니다."
          skillTags="#Spring #React.js "
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집중}
          studyType={StudyType.지식공유및탐구}
          processType={ProcessType.온라인}
          bookMark={bookMark5}
          onClickBookMark={() => setBookMark5(!bookMark5)}
          currentNum={2}
          totalNum={5}
          positionStateList={positionStateList}
        />
        <StudyCard
          studySeq={0}
          title="프론트엔드 스터디"
          skillTags="#Spring #React.js #JavaScript"
          studyCardType={StudyCardType.북마크형}
          recruitType={RecruitType.모집완료}
          studyType={StudyType.지식공유및탐구}
          processType={ProcessType.오프라인}
          bookMark={bookMark6}
          onClickBookMark={() => setBookMark6(!bookMark6)}
          currentNum={10}
          totalNum={10}
          positionStateList={positionStateList}
        />
      </Slider>
      <MemberMainSection
        titleText="멤버 찾기"
        to="/member/findMember"
      ></MemberMainSection>
      <Slider>
        <MemberCard
          name="김은성"
          profileImg={img_testuser_01}
          position="서비스 기획자 ∙ 백엔드 개발자"
          skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
          bookMark={bookMark1}
          onClickBookMark={() => setBookMark1(!bookMark1)}
        />
        <MemberCard
          name="이서윤"
          profileImg={img_testuser_02}
          position="UX/UI 디자이너"
          skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
          bookMark={bookMark2}
          onClickBookMark={() => setBookMark2(!bookMark2)}
        />
        <MemberCard
          name="박우진"
          position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
          skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
          bookMark={bookMark3}
          onClickBookMark={() => setBookMark3(!bookMark3)}
        />
        <MemberCard
          name="김은성"
          profileImg={img_testuser_01}
          position="서비스 기획자 ∙ 백엔드 개발자"
          skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
          bookMark={bookMark1}
          onClickBookMark={() => setBookMark1(!bookMark1)}
        />
        <MemberCard
          name="이서윤"
          profileImg={img_testuser_02}
          position="UX/UI 디자이너"
          skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
          bookMark={bookMark2}
          onClickBookMark={() => setBookMark2(!bookMark2)}
        />
        <MemberCard
          name="박우진"
          position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
          skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
          bookMark={bookMark3}
          onClickBookMark={() => setBookMark3(!bookMark3)}
        />
        <MemberCard
          name="김은성"
          profileImg={img_testuser_01}
          position="서비스 기획자 ∙ 백엔드 개발자"
          skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
          bookMark={bookMark1}
          onClickBookMark={() => setBookMark1(!bookMark1)}
        />
        <MemberCard
          name="이서윤"
          profileImg={img_testuser_02}
          position="UX/UI 디자이너"
          skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
          bookMark={bookMark2}
          onClickBookMark={() => setBookMark2(!bookMark2)}
        />
        <MemberCard
          name="박우진"
          position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
          skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
          bookMark={bookMark3}
          onClickBookMark={() => setBookMark3(!bookMark3)}
        />
      </Slider>
    </>
  );
};

export default FindMain;
