import { useState } from "react";
import cn from "classnames";
import StudyCard from "components/common/StudyCard";
import CheckBox from "components/common/CheckBox";
import styles from "../../css/pages/find/FindDetail.module.scss";
import InfoCircle from "../../images/info_circle.svg";
import StudySearching from "../../images/img/img_search_study.svg";
import { StudyCardType, RecruitType, StudyType, ProcessType } from "utils/enum";
import { PositionState } from "utils/interface";
import { StudyToolTipBox } from "components/common/ToolTipBox";

export default function FindStudy() {
  const [bookMark4, setBookMark4] = useState(false);
  const [bookMark5, setBookMark5] = useState(false);
  const [bookMark6, setBookMark6] = useState(false);
  const [seleted, setSelected] = useState(false);
  const [studyTooltipShow, setStudyTooltipShow] = useState<boolean>(false);

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
              이 중에 마음에 들 스터디
              <br />
              하나쯤은 있을 거에요.
            </h1>
            <p className={cn(styles.bannerParagraph)}>
              나에게 맞는 스터디를 찾는 데에 지쳤다면
              <br />
              스터딧에서 해결할 수 있을 거에요.
            </p>
          </div>
          <img
            src={StudySearching}
            alt="search-man"
            className={cn(styles.bannerImage)}
          />
        </div>
      </div>
      <section className={cn(styles.container)}>
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.titleSection)}>
            <div className={cn(styles.title)}>
              {!studyTooltipShow ? null : (
                <StudyToolTipBox text="최근 등록 순으로 노출됩니다." />
              )}
              <h1 className={cn(styles.titleText)}>스터디 찾기</h1>
              <img
                src={InfoCircle}
                alt="info-circle"
                onMouseEnter={() => setStudyTooltipShow(true)}
                onMouseLeave={() => setStudyTooltipShow(false)}
              />
            </div>
            <CheckBox
              content="모집 중인 스터디만"
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
        </div>
      </section>
    </div>
  );
}
