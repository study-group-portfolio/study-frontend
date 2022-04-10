import cn from 'classnames';
import styles from 'css/pages/mypage/BookMark.module.scss';
import StudyCard from 'components/common/StudyCard';
import MemberCard from 'components/common/MemberCard';
import Tabs from 'components/common/Tab';
import { 
    StudyCardType, 
    RecruitType, 
    StudyType, 
    ProcessType,
    TabMenuType
} from 'utils/enum';
import { useState } from 'react';
import { Tab } from 'utils/interface';

export default function ProfileBookMark() {
    const [tabMenu, setTabMenu] = useState(TabMenuType.스터디)
    return (
        <div>
            <div className={cn(styles.container)}>
                <Tabs 
                    tabList={TAB_MENU}
                    onChange={(tab: Tab) => setTabMenu(tab.value)}
                />
                {tabMenu === TabMenuType.스터디 && <div className={cn(styles.cardList)}>
                    <StudyCard 
                        studySeq={0}
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'}
                        studyCardType={StudyCardType.북마크형}
                        recruitType={RecruitType.모집완료}
                        studyType={StudyType.지식공유및탐구}
                        processType={ProcessType.오프라인}
                        bookMark={false}
                        onClickBookMark={() => { } }
                        currentNum={0}
                        totalNum={10}
                        skillTags={[]} />
                    <StudyCard 
                        studySeq={0}
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'}
                        studyCardType={StudyCardType.북마크형}
                        recruitType={RecruitType.모집완료}
                        studyType={StudyType.지식공유및탐구}
                        processType={ProcessType.오프라인}
                        bookMark={false}
                        onClickBookMark={() => { } }
                        currentNum={0}
                        totalNum={10}
                        skillTags={[]} />
                    <StudyCard 
                        studySeq={0}
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'}
                        studyCardType={StudyCardType.북마크형}
                        recruitType={RecruitType.모집완료}
                        studyType={StudyType.지식공유및탐구}
                        processType={ProcessType.오프라인}
                        bookMark={false}
                        onClickBookMark={() => { } }
                        currentNum={0}
                        totalNum={10}
                        skillTags={[]} />
                    <StudyCard 
                        studySeq={0}
                        title={'프론트엔드 스터디 함께 하실 분을 모집합니다.'}
                        studyCardType={StudyCardType.북마크형}
                        recruitType={RecruitType.모집완료}
                        studyType={StudyType.지식공유및탐구}
                        processType={ProcessType.오프라인}
                        bookMark={false}
                        onClickBookMark={() => { } }
                        currentNum={0}
                        totalNum={10}
                        skillTags={[]} />
                </div>}
                {tabMenu === TabMenuType.멤버 && <div className={cn(styles.cardList)}>
                    <MemberCard 
                        name='이서윤' 
                        position='UI/UX 디자이너' 
                        skillTags='#Adobe Photoshop #Adobe Illustrator #Fram…'
                        bookMark={false} 
                        onClickBookMark={() => {}} />
                    <MemberCard 
                        name='이서윤' 
                        position='UI/UX 디자이너' 
                        skillTags='#Adobe Photoshop #Adobe Illustrator #Fram…'
                        bookMark={false} 
                        onClickBookMark={() => {}} />
                    <MemberCard 
                        name='이서윤' 
                        position='UI/UX 디자이너' 
                        skillTags='#Adobe Photoshop #Adobe Illustrator #Fram…'
                        bookMark={false} 
                        onClickBookMark={() => {}} />
                    <MemberCard 
                        name='이서윤' 
                        position='UI/UX 디자이너' 
                        skillTags='#Adobe Photoshop #Adobe Illustrator #Fram…'
                        bookMark={false} 
                        onClickBookMark={() => {}} />
                </div>}
            </div>
        </div>
    )
}

const TAB_MENU = [
    {
        name: '스터디',
        value: TabMenuType.스터디,
    },
    {
        name: '멤버',
        value: TabMenuType.멤버
    }
]