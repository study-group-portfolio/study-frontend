import cn from 'classnames';
import styles from 'css/components/common/StudyCard.module.scss';
import { 
    BadgeType, 
    ProcessType, 
    RecruitType, 
    StudyType,
    StudyCardType, 
} from 'utils/enum';
import Badge from './Badge';
import { Link, useHistory } from 'react-router-dom';
import ic_expand_more from 'images/icon/ic_expand_more.svg';
import ic_expand_less from 'images/icon/ic_expand_less.svg';
import ic_bookmark_off_24dp from 'images/icon/ic_bookmark_off_24dp.svg';
import ic_bookmark_on_24dp from 'images/icon/ic_bookmark_on_24dp.svg';
import ic_edit_24dp from 'images/icon/ic_edit_24dp.svg';
import { useState } from 'react';
import { PositionState } from 'utils/interface';
interface StudyCardProps {
    studySeq: number;
    title: string;
    skillTags?: string[];
    studyCardType: StudyCardType;
    recruitType: RecruitType;
    studyType: StudyType;
    processType: ProcessType;
    bookMark: boolean;
    onClickBookMark: Function;
    currentNum: number; // 현재 모집인원
    totalNum: number; // 총 모집인원
    positionStateList: PositionState[];
}

export default function StudyCard(props: StudyCardProps) {
    const { 
        studySeq,
        title, 
        skillTags,
        studyCardType,
        recruitType, 
        studyType, 
        processType,
        bookMark,
        currentNum, 
        totalNum,
        positionStateList
    } = props;
    const [state, setState] = useState(false);

    const history = useHistory();

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.card)}>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.section)}>
                        <div className={cn(styles.titleSection)}>
                            <Link to={getDetailPath(studySeq, studyType)} className={cn(styles.title)}>{title}</Link>
                            {/* <div className={cn(styles.skillTagSection)}>{skillTags.map((skill: string) => "#" + skill).join(" ")}</div> */}
                        </div>
                        <div className={cn(styles.badgeSection)}>
                            <Badge badgeType={getRecruitBadge(recruitType)} />{/* 모집상태 */}
                            <Badge badgeType={getStudyBadge(studyType)} />{/* 스터디 종류 */}
                            <Badge badgeType={getProcessBadge(processType)} />{/* 스터디 진행방식 */}
                        </div>
                    </div>
                    <div className={styles.buttonSection}>
                        {/* 북마크 버튼 */}
                        {studyCardType === StudyCardType.북마크형 && 
                        <button 
                            onClick={() => {props.onClickBookMark()}}
                        >
                            {!bookMark && <img src={ic_bookmark_off_24dp} alt="북마크off"/>}
                            {bookMark && <img src={ic_bookmark_on_24dp} alt="북마크on"/>}
                        </button>}
                        {/* 편집 버튼 */}
                        {studyCardType === StudyCardType.편집형 && 
                        <button 
                            onClick={() => history.push(getRevisionPath(studySeq, studyType))}
                        >
                            <img src={ic_edit_24dp} alt="편집"/>
                        </button>}
                    </div>
                </div>
                <div className={cn(styles.bottom)}>
                    <div className={cn(styles.left)}>
                        <span>모집인원</span>
                        <span>{currentNum}/{totalNum}</span>
                    </div>
                    {/* <div 
                        className={cn(styles.right)}
                        onMouseOver={() => setState(true)}
                        onMouseOut={() => setState(false)}
                    >
                        <span>포지션 현황</span>
                        {state && <img src={ic_expand_more} alt="확장"/>}
                        {!state && <img src={ic_expand_less} alt="축소"/>}
                    </div> */}
                </div>
            </div>
            {/* {!state && <div className={cn(styles.tooltip)}>
                <ul className={cn(styles.positionList)}>
                    {positionStateList.map((positionState, index) => (
                    <div className={cn(styles.item)}key={index}>
                        <span>{positionState.name}</span>
                        <span>{positionState.currentNum}/{positionState.totalNum}</span>
                    </div>))}
                </ul>
            </div>} */}
        </div>
    )
}

function getRecruitBadge(recruitType: RecruitType): BadgeType {
    let badgeType: BadgeType;

    switch (recruitType) {
        case RecruitType.모집완료:
            badgeType = BadgeType.모집완료;
            break;
        case RecruitType.모집중:
            badgeType = BadgeType.모집중;
            break;
    }

    return badgeType;
}

function getStudyBadge(studyType: StudyType): BadgeType {
    let badgeType: BadgeType;

    switch (studyType) {
        case StudyType.사이드프로젝트:
            badgeType = BadgeType.사이드프로젝트;
            break;
        case StudyType.지식공유및탐구:
            badgeType = BadgeType.지식공뮤및탐구;
            break;
    }

    return badgeType;
}

function getProcessBadge(processType: ProcessType): BadgeType {
    let badgeType: BadgeType;

    switch (processType) {
        case ProcessType.오프라인:
            badgeType = BadgeType.오프라인;
            break;
        case ProcessType.온라인:
            badgeType = BadgeType.온라인;
            break;
        case ProcessType.온오프라인:
            badgeType = BadgeType.온오프라인;
            break;
    }

    return badgeType;
}

function getRevisionPath(studySeq: number, studyType: StudyType): string {
    let path = "/study/revision?";

    switch (studyType) {
        case StudyType.사이드프로젝트:
            path += "kind=project";
            break;
        case StudyType.지식공유및탐구:
            path += "kind=knowledge"
            break;
    }

    path += `&studySeq=${studySeq}`;

    return path;
}

function getDetailPath(studySeq: number, studyType: StudyType): string {
    let path = "/study/detail?";

    switch (studyType) {
        case StudyType.사이드프로젝트:
            path += "kind=project";
            break;
        case StudyType.지식공유및탐구:
            path += "kind=knowledge"
            break;
    }

    path += `&studySeq=${studySeq}`;

    return path;
}