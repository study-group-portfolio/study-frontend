import cn from 'classnames';
import styles from 'css/components/common/StudyCard.module.scss';
import { BadgeType, ProcessType, RecruitType, StudyType } from 'utils/enum';
import Badge from './Badge';
import { Link, useHistory } from 'react-router-dom';

interface StudyCardProps {
    studySeq: number;
    title: string;
    skillTags: string;
    recruitType: RecruitType;
    studyType: StudyType;
    processType: ProcessType;
    bookMark: boolean;
    onClickBookMark: Function;
    currentNum: number; // 현재 모집인원
    totalNum: number; // 총 모집인원
}

export default function StudyCard(props: StudyCardProps) {
    const { 
        studySeq,
        title, 
        skillTags, 
        recruitType, 
        studyType, 
        processType,
        bookMark,
        currentNum, 
        totalNum 
    } = props;

    const history = useHistory();

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.content)}>
                <div className={cn(styles.section)}>
                    <div className={cn(styles.titleSection)}>
                        <Link to={getDetailPath(studySeq, studyType)} className={cn(styles.title)}>{title}</Link>
                        <div className={cn(styles.skillTagSection)}>{skillTags}</div>
                    </div>
                    <div className={cn(styles.badgeSection)}>
                        <Badge badgeType={getRecruitBadge(recruitType)} />{/* 모집상태 */}
                        <Badge badgeType={getStudyBadge(studyType)} />{/* 스터디 종류 */}
                        <Badge badgeType={getProcessBadge(processType)} />{/* 스터디 진행방식 */}
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    {/* 북마크 버튼 */}
                    {<button 
                        className={
                            cn(
                                {
                                    [styles.bookMarkOn]: bookMark,
                                    [styles.bookMarkOff]: !bookMark,
                                }
                            )
                        }
                        onClick={() => props.onClickBookMark()}
                    ></button>}
                    {/* 편집 버튼 */}
                    <button 
                        className={cn(styles.editBtn)}
                        onClick={() => history.push(getRevisionPath(studySeq, studyType))}
                    >
                    </button>
                </div>
            </div>
            <div className={cn(styles.bottom)}>
                <span>모집인원</span>
                <span>{currentNum}/{totalNum}</span>
                <span className={cn(styles.status)}>포지션 현황</span>
            </div>
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