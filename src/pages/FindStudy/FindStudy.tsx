import { useState } from "react";
import cn from "classnames";
import StudyCard from "components/common/StudyCard";
import CheckBox from "components/common/CheckBox";
import styles from "../../css/pages/find/FindDetail.module.scss";
import InfoCircle from "../../images/info_circle.svg";
import SearchMan from "../../images/search_man.svg";
import { StudyCardType, RecruitType, StudyType, ProcessType } from "utils/enum";
import { PositionState } from "utils/interface";

export default function FindMember() {
  const [bookMark4, setBookMark4] = useState(false);
  const [bookMark5, setBookMark5] = useState(false);
  const [bookMark6, setBookMark6] = useState(false);
  const [seleted, setSelected] = useState(false);

  const positionStateList: PositionState[] = [
    { name: "백엔드 개발자", currentNum: 1, totalNum: 1 },
    { name: "프론트엔드 개발자", currentNum: 1, totalNum: 1 },
    { name: "UX/UI 디자이너", currentNum: 0, totalNum: 2 },
  ];
  return (
    <>
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
            src={SearchMan}
            alt="search-man"
            className={cn(styles.bannerImage)}
          />
        </div>
      </div>
      <section className={cn(styles.container)}>
        <div className={cn(styles.title)}>
          <h1 className={cn(styles.titleText)}>스터디 찾기</h1>
          <img
            src={InfoCircle}
            alt="info-circle"
            className={cn(styles.infoCircle)}
          />
          <CheckBox
            content="d"
            selected={false}
            onClick={(content: string, selected: boolean) =>
              setSelected(selected)
            }
          />
        </div>
        <div className={cn(styles.CardGrid)}>
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
        </div>
      </section>
    </>
  );
}
