import { useState, useEffect } from "react";
import cn from "classnames";
import StudyCard from "components/common/StudyCard";
import styles from "../../css/pages/find/FindDetail.module.scss";
import InfoCircle from "../../images/info_circle.svg";
import StudySearching from "../../images/img/img_search_study.svg";
import { StudyCardType, RecruitType} from "utils/enum";
import { StudyToolTipBox } from "components/common/ToolTipBox";
import { getStudyList } from 'api/studyAPI';

const SIZE_PER_PAGE: number = 12;

export default function FindStudy() {
  const [bookMark4, setBookMark4] = useState(false);
  const [studyTooltipShow, setStudyTooltipShow] = useState<boolean>(false);
  const [studyList, setStudyList] = useState([]);
  const [isLastPage, setIsLastPage] = useState<boolean>(false)

  useEffect(() => {
    (async function() {
      try {
        const { data: { data: { content: studyListContent, last }}}= await getStudyList(0, SIZE_PER_PAGE);
        setStudyList(studyListContent);
        setIsLastPage(last);
      } catch (error) {
        console.error(error);
      }

    })()
    
  }, [])
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
            {/* <CheckBox
              content="모집 중인 스터디만"
              selected={false}
              onClick={(content: string, selected: boolean) =>
                setSelected(selected)
              }
            /> */}
          </div>
          <div className={cn(styles.CardGrid)}>
            {studyList.length > 0 && studyList.map((study: any, index: number) => {
              const [currentNum, totalNum, skillTags]: [number, number, Set<string>] = study.positions.reduce((positionAcc: [number, number, Set<string>], position: any) => {
                positionAcc[0] += position.totalCount | 0;
                positionAcc[1] += position.count | 0;
                
                for (const skill of position.skills) {
                  positionAcc[2].add(skill);
                }

                return positionAcc;
              }, [0, 0, new Set()])

              return (<StudyCard
                key={index}
                studySeq={study.id}
                title={study.title}
                skillTags={Array.from(skillTags)}
                studyCardType={StudyCardType.북마크형}
                recruitType={RecruitType.모집중}
                studyType={study.type}
                processType={study.status}
                bookMark={bookMark4}
                onClickBookMark={() => setBookMark4(!bookMark4)}
                currentNum={currentNum}
                totalNum={totalNum}
              />);
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
