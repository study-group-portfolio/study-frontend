import React, { useState } from "react";
import cn from "classnames";
import styles from "../../css/pages/find/FindMain.module.scss";
import Slider from "components/common/Slider";
import MemberCard from "components/common/MemberCard";
import StudyCard from "components/common/StudyCard";
import { Link } from "react-router-dom";
import { StudyCardType, RecruitType, StudyType, ProcessType } from "utils/enum";
import { PositionState } from "utils/interface";
import Building from "../../images/building.svg";
import InfoCircle from "../../images/info_circle.svg";
import { Path } from "utils/enum";
import {
  StudyToolTipBox,
  MemberToolTipBox,
} from "components/common/ToolTipBox";

import img_testuser_01 from "images/img/img_testuser_01.svg";
import img_testuser_02 from "images/img/img_testuser_02.svg";
import { test } from "api/userAPI";

const FindMain: React.FunctionComponent = () => {
  const [bookMark1, setBookMark1] = useState(false);
  const [bookMark2, setBookMark2] = useState(false);
  const [bookMark3, setBookMark3] = useState(false);
  const [bookMark4, setBookMark4] = useState(false);
  const [bookMark5, setBookMark5] = useState(false);
  const [seleted, setSelected] = useState(false);
  const [studyTooltipShow, setStudyTooltipShow] = useState<boolean>(false);
  const [memberTooltipShow, setMemberTooltipShow] = useState<boolean>(false);

  const [bookMark6, setBookMark6] = useState(false);
  const positionStateList: PositionState[] = [
    { name: "백엔드 개발자", currentNum: 1, totalNum: 1 },
    { name: "프론트엔드 개발자", currentNum: 1, totalNum: 1 },
    { name: "UX/UI 디자이너", currentNum: 0, totalNum: 2 },
  ];

  return (
    <div>
      <div className={cn(styles.bannerSection)}>
        <div className={cn(styles.bannerWrapper)}>
          <div className={cn(styles.bannerExp)}>
            <h1 className={cn(styles.bannerTitle)}>
              함께 달릴 멤버를
              <br />
              직접 선택해 보세요.
            </h1>
            <p className={cn(styles.bannerParagraph)}>
              함께 성장할 멤버들을 직접 골라보는 건 어때요?
              <br />
              준비된 멤버들이 기다리고 있어요.
            </p>
          </div>
          <img
            src={Building}
            alt="search-man"
            className={cn(styles.bannerImage)}
          />
        </div>
      </div>
      <section className={cn(styles.container)}>
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.titleSection)}>
            {!studyTooltipShow ? null : (
              <StudyToolTipBox text="최근 등록 순으로 노출됩니다." />
            )}
            <div className={cn(styles.title)}>
              <h1 className={cn(styles.titleText)}>스터디 찾기</h1>
              <img
                src={InfoCircle}
                alt="info-circle"
                onMouseEnter={() => setStudyTooltipShow(true)}
                onMouseLeave={() => setStudyTooltipShow(false)}
              />
            </div>
            <Link to={Path.스터디_목록}>전체보기</Link>
          </div>
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
        </div>
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.wrapper)}>
            <div className={cn(styles.titleSection)}>
              {!memberTooltipShow ? null : (
                <MemberToolTipBox text="최근 업데이트 순으로 노출됩니다." />
              )}
              <div className={cn(styles.title)}>
                <h1 className={cn(styles.titleText)}>멤버 찾기</h1>
                <img
                  src={InfoCircle}
                  alt="info-circle"
                  className={cn(styles.infoCircle)}
                  onMouseEnter={() => setMemberTooltipShow(true)}
                  onMouseLeave={() => setMemberTooltipShow(false)}
                />
              </div>
              <Link to={Path.맴버_목록}>전체보기</Link>
            </div>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindMain;
