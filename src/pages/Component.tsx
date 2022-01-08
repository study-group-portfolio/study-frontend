import { 
    ProcessType, 
    RecruitType, 
    StudyType, 
    ButtonType, 
    TextInputState, 
    TextInputType, 
    InputType,
    BadgeType,
    StudyCardType
} from 'utils/enum';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import Badge from 'components/common/Badge';
import AlarmBadge from 'components/common/AlarmBadge';
import StudyCard from 'components/common/StudyCard';
import MemberCard from 'components/common/MemberCard';
import Slider from 'components/common/Slider';
import Select from 'components/common/Select';
import GroupOptions from 'components/common/GroupOptions';
import Options from 'components/common/Options';
import CheckBox from 'components/common/CheckBox';
import CheckBoxOptions from 'components/common/CheckBoxOptions';
import styles from 'css/pages/Component.module.scss';
import cn from 'classnames';
import ic_search_24dp from 'images/icon/ic_search_24dp.svg';
import img_testuser_01 from 'images/img/img_testuser_01.svg';
import img_testuser_02 from 'images/img/img_testuser_02.svg';
import { useState, useEffect } from 'react';
import { PositionState, CustomChangeEvent } from 'utils/interface';

export default function Test() {
    /** 북마크 설정 관련 변수 */
    const [bookMark1, setBookMark1] = useState(false);
    const [bookMark2, setBookMark2] = useState(false);
    const [bookMark3, setBookMark3] = useState(false);
    const [bookMark4, setBookMark4] = useState(false);
    const [bookMark5, setBookMark5] = useState(false);
    const [bookMark6, setBookMark6] = useState(false);

    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState(Array<string>());

    const [seleted, setSelected] = useState(false);

    const positionStateList: PositionState[] = [
        { name: '백엔드 개발자', currentNum: 1, totalNum: 1},
        { name: '프론트엔드 개발자', currentNum: 1, totalNum: 1},
        { name: 'UX/UI 디자이너', currentNum: 0, totalNum: 2},
    ]

    const locations = ['서울', '부산', '인천', '경기', '강원', '충청', '전라', '경상', '제주'];
    const positions = [
        {
            title: '기획',
            items: ['서비스 기획자', '게임 기획자', 'PM·PO', '데이터 분석가']
        },
        {
            title: '디자인',
            items: ['UX/UI 디자이너', 'UX디자이너', 'GUI 디자이너', '그래픽 디자이너', '3D 디자이너']
        },
        {
            title: '개발',
            items: ['프론트엔드 개발자', '웹 개발자', '서버 개발자', '자바 개발자', '웹 퍼블리셔']
        }
    ];
    const skills = [
        'zeplin', 'jQuery', 'Google Analytics', 
        'iOS', 'C++', 'Amplitude', 
        'Android', 'C#', 'Adobe Photoshop', 
        'html/css', 'Java','Adobe illustrator', 
        'Spring', 'Python','Adobe XD', 
        'React.js', 'Python','Figma', 
        'Amazon AWS', 'Pycharm','Framer', 
        'MySQL', 'Sketch','JavaScript'
    ]

    return (
        <div>
            <div className={cn(styles.container)}>
                <h2>버튼</h2>
                <div className={cn(styles.buttonSection)}>
                    <Button 
                        buttonName={'버튼'} 
                        disabled={false} 
                        img={undefined} 
                        buttonType={ButtonType.기본} 
                        onClick={() => {}} />
                    <Button 
                        buttonName={'버튼'} 
                        disabled={true} 
                        img={undefined} 
                        buttonType={ButtonType.기본} 
                        onClick={() => {}} />
                    <Button 
                        buttonName={'버튼'} 
                        disabled={false} 
                        img={undefined} 
                        buttonType={ButtonType.서브} 
                        onClick={() => {}} />
                    <Button 
                        buttonName={'버튼'} 
                        disabled={true} 
                        img={undefined} 
                        buttonType={ButtonType.서브} 
                        onClick={() => {}} />
                    <Button 
                        buttonName={'카카오'} 
                        disabled={false} 
                        img={undefined} 
                        buttonType={ButtonType.카카오} 
                        onClick={() => {}} />
                    <Button 
                        buttonName={'구글'} 
                        disabled={false} 
                        img={undefined} 
                        buttonType={ButtonType.구글} 
                        onClick={() => {}} />
                </div>
                <h2>텍스트 입력창</h2>
                <div className={cn(styles.textInputSection)}>
                    <TextInput 
                        placeholder={'안녕'}
                        type={InputType.텍스트형}
                        textInputState={TextInputState.기본값} 
                        textInputType={TextInputType.일반형} />
                    <TextInput 
                        placeholder={'안녕'} 
                        type={InputType.텍스트형}
                        buttonText={'버튼'} 
                        textInputState={TextInputState.기본값} 
                        textInputType={TextInputType.버튼형} />
                    <TextInput 
                        placeholder={'안녕'} 
                        type={InputType.텍스트형}
                        buttonImg={ic_search_24dp} 
                        textInputState={TextInputState.기본값} 
                        textInputType={TextInputType.아이콘형} />
                </div>
                <h2>Badge</h2>
                <div className={cn(styles.badgeSection)}>
                    <Badge badgeType={BadgeType.모집완료} />
                    <Badge badgeType={BadgeType.모집중} />
                    <Badge badgeType={BadgeType.사이드프로젝트} />
                    <Badge badgeType={BadgeType.지식공뮤및탐구} />
                    <Badge badgeType={BadgeType.오프라인} />
                    <Badge badgeType={BadgeType.온라인} />
                    <Badge badgeType={BadgeType.온오프라인} />
                </div>
                <h2>AlarmBadge</h2>
                <div className={cn(styles.alarmBadgeSection)}>
                    <AlarmBadge text="8" />
                    <AlarmBadge text="50" />
                    <AlarmBadge text="99+" />
                </div>
                <h2>StudyCard</h2>
                <div className={cn(styles.studyCardSection)}>
                    <StudyCard 
                        studySeq={0} 
                        title='포트폴리오용' 
                        skillTags='#Spring #React.js #JavaScript #jQuer…'
                        studyCardType={StudyCardType.북마크형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.사이드프로젝트} 
                        processType={ProcessType.온오프라인} 
                        bookMark={bookMark4} 
                        onClickBookMark={() => setBookMark4(!bookMark4)} 
                        currentNum={5} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='알고리즘 스터디 구합니다.' 
                        skillTags='#Spring #React.js '
                        studyCardType={StudyCardType.북마크형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.온라인} 
                        bookMark={bookMark5} 
                        onClickBookMark={() => setBookMark5(!bookMark5)} 
                        currentNum={2} 
                        totalNum={5}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.북마크형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='포트폴리오용' 
                        skillTags='#Spring #React.js #JavaScript #jQuer…'
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.사이드프로젝트} 
                        processType={ProcessType.온오프라인} 
                        bookMark={bookMark4} 
                        onClickBookMark={() => setBookMark4(!bookMark4)} 
                        currentNum={5} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='알고리즘 스터디 구합니다.' 
                        skillTags='#Spring #React.js '
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.온라인} 
                        bookMark={bookMark5} 
                        onClickBookMark={() => setBookMark5(!bookMark5)} 
                        currentNum={2} 
                        totalNum={5}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                </div>
                <h2>MemberCard</h2>
                <div className={cn(styles.menberCardSection)}>
                    <MemberCard
                        name='김은성'
                        profileImg={img_testuser_01}
                        position="서비스 기획자 ∙ 백엔드 개발자"
                        skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
                        bookMark={bookMark1}
                        onClickBookMark={() => setBookMark1(!bookMark1)}
                    />
                    <MemberCard
                        name='이서윤'
                        profileImg={img_testuser_02}
                        position="UX/UI 디자이너"
                        skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
                        bookMark={bookMark2}
                        onClickBookMark={() => setBookMark2(!bookMark2)}
                    />
                    <MemberCard
                        name='박우진'
                        position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
                        skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
                        bookMark={bookMark3}
                        onClickBookMark={() => setBookMark3(!bookMark3)}
                    />
                </div>
                <h2>Select</h2>
                <div className={cn(styles.selectSection)}>
                    <Select 
                        placeholder='지역을 선택해 주세요'
                        value={selectedValue1}
                        onChange={(customChangeEvent: CustomChangeEvent) => {
                            if (customChangeEvent.value && typeof customChangeEvent.value === 'string') {
                                setSelectedValue1(customChangeEvent.value);
                            }
                        }}
                    >
                        <Options
                            options={locations}
                        />
                    </Select>
                    <Select 
                        placeholder="포지션을 선택해 주세요"
                        value={selectedValue2}
                        onChange={(customChangeEvent: CustomChangeEvent) => {
                            if (customChangeEvent.value && typeof customChangeEvent.value === 'string') {
                                setSelectedValue2(customChangeEvent.value);
                            }
                        }}
                    >
                        <GroupOptions
                            options={positions}
                        />
                    </Select>
                    <Select
                        placeholder='스킬을 선택해 주세요'
                        value={selectedValue3}
                        onChange={(customChangeEvent: CustomChangeEvent) => {
                            if (customChangeEvent.value && typeof customChangeEvent.value !== 'string') {
                                setSelectedValue3(customChangeEvent.value);
                            }
                        }}
                    >
                        <CheckBoxOptions 
                            options={skills}
                        />
                    </Select>
                </div>
                <h2>CheckBox</h2>
                <div>
                    <CheckBox 
                        content='Google Analytics'
                        selected={false}
                        onClick={(content: string, selected: boolean) => setSelected(selected)}/>
                </div>
            </div>
            <div>
                <Slider>
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='알고리즘 스터디 구합니다.' 
                        skillTags='#Spring #React.js '
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.온라인} 
                        bookMark={bookMark5} 
                        onClickBookMark={() => setBookMark5(!bookMark5)} 
                        currentNum={2} 
                        totalNum={5}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='알고리즘 스터디 구합니다.' 
                        skillTags='#Spring #React.js '
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.온라인} 
                        bookMark={bookMark5} 
                        onClickBookMark={() => setBookMark5(!bookMark5)} 
                        currentNum={2} 
                        totalNum={5}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='알고리즘 스터디 구합니다.' 
                        skillTags='#Spring #React.js '
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.온라인} 
                        bookMark={bookMark5} 
                        onClickBookMark={() => setBookMark5(!bookMark5)} 
                        currentNum={2} 
                        totalNum={5}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='프론트엔드 스터디' 
                        skillTags='#Spring #React.js #JavaScript' 
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집완료} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.오프라인} 
                        bookMark={bookMark6} 
                        onClickBookMark={() => setBookMark6(!bookMark6)} 
                        currentNum={10} 
                        totalNum={10}
                        positionStateList={positionStateList} />
                    <StudyCard 
                        studySeq={0} 
                        title='알고리즘 스터디 구합니다.' 
                        skillTags='#Spring #React.js '
                        studyCardType={StudyCardType.편집형}
                        recruitType={RecruitType.모집중} 
                        studyType={StudyType.지식공유및탐구} 
                        processType={ProcessType.온라인} 
                        bookMark={bookMark5} 
                        onClickBookMark={() => setBookMark5(!bookMark5)} 
                        currentNum={2} 
                        totalNum={5}
                        positionStateList={positionStateList} />
                </Slider>
            </div>
        </div>
    )
}