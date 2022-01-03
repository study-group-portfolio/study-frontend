import StudyCard from 'components/common/StudyCard';

import img from 'images/ic_visibility_off_24dp.svg';
import { ProcessType, RecruitType, StudyType } from 'utils/enum';
import { useState } from 'react';

export default function Test() {
    const [bookMark, setBookMark] = useState(false);
    const onClickBookMark = () => {
        setBookMark(prev => {
            console.log(!prev);
            return !prev;
        })
    }
    return (
        <div style={{marginTop: '130px', marginLeft: '103px', width: '460px'}}>
            <StudyCard 
                studySeq={1}
                title={'포트폴리오용 프로젝트 팀원 구합니다.'}
                skillTags={'#Spring #React.js #JavaScript #jQuer…'}
                recruitType={RecruitType.모집중}
                studyType={StudyType.사이드프로젝트}
                processType={ProcessType.오프라인}
                bookMark={bookMark}
                onClickBookMark={() => onClickBookMark()}
                currentNum={10} 
                totalNum={10} />
        </div>
    )
}