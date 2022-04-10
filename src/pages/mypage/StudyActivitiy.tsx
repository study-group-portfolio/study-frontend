import { useState } from 'react';
import cn from 'classnames';
import styles from 'css/pages/mypage/StudyActivity.module.scss';
import Tabs from 'components/common/Tab';
import StudyCard from 'components/common/StudyCard';
import { ProcessType, RecruitType, StudyCardType, StudyType, TabMenuType } from 'utils/enum';
import { Tab } from 'utils/interface';

export default function StudyActivity() {
    const [tabMenu, setTabMenu] = useState(TabMenuType.참여한_스터디);

    return (
        <div>
            <div className={cn(styles.container)}>
                <Tabs 
                    tabList={TAB_MENU}
                    onChange={(tab: Tab) => setTabMenu(tab.value)}
                />
                {tabMenu === TabMenuType.참여한_스터디 && 
                <div className={cn(styles.cardList)}>
                    <StudyCard 
                        studySeq={0} 
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'} 
                        studyCardType={StudyCardType.북마크형} 
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={10} 
                        positionStateList={[]} />
                    <StudyCard 
                        studySeq={0} 
                        title={'알고리즘 스터디 구합니다.'} 
                        studyCardType={StudyCardType.북마크형} 
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={5} 
                        positionStateList={[]} />
                    <StudyCard 
                        studySeq={0} 
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'} 
                        studyCardType={StudyCardType.북마크형} 
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={10} 
                        positionStateList={[]} />
                    <StudyCard 
                        studySeq={0} 
                        title={'알고리즘 스터디 구합니다.'} 
                        studyCardType={StudyCardType.북마크형} 
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={5} 
                        positionStateList={[]} />
                </div>}
                {tabMenu === TabMenuType.생성한_스터디 && 
                <div className={cn(styles.cardList)}>
                    <StudyCard 
                        studySeq={0} 
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'} 
                        studyCardType={StudyCardType.편집형} 
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={10} 
                        positionStateList={[]} />
                    <StudyCard 
                        studySeq={0} 
                        title={'알고리즘 스터디 구합니다.'} 
                        studyCardType={StudyCardType.편집형} 
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={5} 
                        positionStateList={[]} />
                    <StudyCard 
                        studySeq={0} 
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'} 
                        studyCardType={StudyCardType.편집형} 
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={10} 
                        positionStateList={[]} />
                    <StudyCard 
                        studySeq={0} 
                        title={'알고리즘 스터디 구합니다.'} 
                        studyCardType={StudyCardType.편집형} 
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={false} 
                        onClickBookMark={() => {}} 
                        currentNum={0} 
                        totalNum={5} 
                        positionStateList={[]} />
                </div>}
            </div>
        </div>
    )
}

const TAB_MENU = [
    {
        name: '참여한 스터디',
        value: TabMenuType.참여한_스터디,
    },
    {
        name: '생성한 스터디',
        value: TabMenuType.생성한_스터디
    }
]