import { 
    ProcessType, 
    RecruitType, 
    StudyType, 
    ButtonType, 
    TextInputState, 
    TextInputType, 
    InputType,
    BadgeType,
    StudyCardType,
    CircleButtonType,
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
import Textarea from 'components/common/Textarea';
import PositionCard from 'components/common/PositionCard';
import PositionSelector from 'components/common/Selector';
import Calendar from 'components/common/Calendar';
import CalendarSelect from 'components/common/CalednarSelect';
import Switch from 'components/common/Switch';
import CircleButton from 'components/common/CircleButton';
import styles from 'css/pages/test/Component.module.scss';
import cn from 'classnames';
import ic_search_24dp from 'images/icon/ic_search_24dp.svg';
import ic_visibility_on_24dp from 'images/icon/ic_visibility_on_24dp.svg';
import ic_visibility_off_24dp from 'images/icon/ic_visibility_off_24dp.svg';
import img_testuser_01 from 'images/img/img_testuser_01.svg';
import img_testuser_02 from 'images/img/img_testuser_02.svg';
import { useState, useEffect } from 'react';
import { 
    PositionState, 
    CustomChangeEvent, 
    Duration 
} from 'utils/interface';
import CountButton from 'components/common/CountButton';
import ic_share_black_20dp from 'images/icon/ic_share_black_20dp.svg';

// export default function Test() {
//   const [visible, setVisible] = useState(false);

//   /** 북마크 설정 관련 변수 */
//   const [bookMark1, setBookMark1] = useState(false);
//   const [bookMark2, setBookMark2] = useState(false);
//   const [bookMark3, setBookMark3] = useState(false);
//   const [bookMark4, setBookMark4] = useState(false);
//   const [bookMark5, setBookMark5] = useState(false);
//   const [bookMark6, setBookMark6] = useState(false);

//   const [selectedValue1, setSelectedValue1] = useState("");
//   const [selectedValue2, setSelectedValue2] = useState("");
//   const [selectedValue3, setSelectedValue3] = useState(Array<string>());

//   const [selected, setSelected] = useState(false);

//   const [clicked1, setClicked1] = useState(false);
//   const [clicked2, setClicked2] = useState(false);
//   const [clicked3, setClicked3] = useState(false);
//   const [clicked4, setClicked4] = useState(false);
//   const [clicked5, setClicked5] = useState(false);
//   const [clicked6, setClicked6] = useState(false);
//   const [clicked7, setClicked7] = useState(false);

//   const [duration1, setDuration1]: [Duration, React.Dispatch<React.SetStateAction<Duration>>] = useState({});
//   const [duration2, setDuration2]: [Duration, React.Dispatch<React.SetStateAction<Duration>>] = useState({});

//   const positionStateList: PositionState[] = [
//     { name: "백엔드 개발자", currentNum: 1, totalNum: 1 },
//     { name: "프론트엔드 개발자", currentNum: 1, totalNum: 1 },
//     { name: "UX/UI 디자이너", currentNum: 0, totalNum: 2 },
//   ];

//   const locations = [
//     "서울",
//     "부산",
//     "인천",
//     "경기",
//     "강원",
//     "충청",
//     "전라",
//     "경상",
//     "제주",
//   ];
//   const positions = [
//     {
//       title: "기획",
//       items: ["서비스 기획자", "게임 기획자", "PM·PO", "데이터 분석가"],
//     },
//     {
//       title: "디자인",
//       items: [
//         "UX/UI 디자이너",
//         "UX디자이너",
//         "GUI 디자이너",
//         "그래픽 디자이너",
//         "3D 디자이너",
//       ],
//     },
//     {
//       title: "개발",
//       items: [
//         "프론트엔드 개발자",
//         "웹 개발자",
//         "서버 개발자",
//         "자바 개발자",
//         "웹 퍼블리셔",
//       ],
//     },
//   ];
//   const skills = [
//     "zeplin",
//     "jQuery",
//     "Google Analytics",
//     "iOS",
//     "C++",
//     "Amplitude",
//     "Android",
//     "C#",
//     "Adobe Photoshop",
//     "html/css",
//     "Java",
//     "Adobe illustrator",
//     "Spring",
//     "Python",
//     "Adobe XD",
//     "React.js",
//     "Python",
//     "Figma",
//     "Amazon AWS",
//     "Pycharm",
//     "Framer",
//     "MySQL",
//     "Sketch",
//     "JavaScript",
//   ];

//   const skillTagList = [
//     {
//       name: "Spring",
//     },
//     {
//       name: "React.js",
//     },
//     {
//       name: "JavaScript",
//     },
//     {
//       name: "jQuery",
//     },
//     {
//       name: "C++",
//     },
//     {
//       name: "C#",
//     },
//     {
//       name: "Java",
//     },
//     {
//       name: "PHP",
//     },
//     {
//       name: "Python",
//     },
//     {
//       name: "Pycharm",
//     },
//   ];

//     return (
//         <div style={{marginBottom: '90px'}}>
//             <div className={cn(styles.container)}>
//                 <h2>버튼</h2>
//                 <div className={cn(styles.buttonSection)}>
//                     <Button 
//                         buttonName={'버튼'} 
//                         disabled={false} 
//                         img={undefined} 
//                         buttonType={ButtonType.기본} 
//                         onClick={() => {}} />
//                     <Button 
//                         buttonName={'버튼'} 
//                         disabled={true} 
//                         img={undefined} 
//                         buttonType={ButtonType.기본} 
//                         onClick={() => {}} />
//                     <Button 
//                         buttonName={'버튼'} 
//                         disabled={false} 
//                         img={undefined} 
//                         buttonType={ButtonType.서브} 
//                         onClick={() => {}} />
//                     <Button 
//                         buttonName={'버튼'} 
//                         disabled={true} 
//                         img={undefined} 
//                         buttonType={ButtonType.서브} 
//                         onClick={() => {}} />
//                     <Button 
//                         buttonName={'카카오'} 
//                         disabled={false} 
//                         img={undefined} 
//                         buttonType={ButtonType.카카오} 
//                         onClick={() => {}} />
//                     <Button 
//                         buttonName={'구글'} 
//                         disabled={false} 
//                         img={undefined} 
//                         buttonType={ButtonType.구글} 
//                         onClick={() => {}} />
//                 </div>
//                 <h2>TextInput(Status)</h2>
//                 <div className={cn(styles.textInputSection)}>
//                     <div>
//                         <TextInput 
//                             placeholder='닉네임을 입력해주세요'
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             value='스터딧'
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             value='스터딧'
//                             disabled={true}
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             value='스터딧'
//                             textInputState={TextInputState.오류}
//                             errorText='이미 존재하는 닉네임입니다.'
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             value='스터딧'
//                             textInputState={TextInputState.성공}
//                         />
//                     </div>
//                 </div>
//                 <h2>TextInput(Combination)</h2>
//                 <div className={cn(styles.textInputSection)}>
//                     <div 
//                         style={{
//                             display: 'grid',
//                             rowGap: '8px'
//                         }}
//                     >
//                         <h3
//                             style={{
//                                 fontStyle: 'normal',
//                                 fontWeight: 'normal',
//                                 fontSize: '16px',
//                                 lineHeight: '20px',
//                                 color: '#667085'
//                             }}
//                         >
//                             닉네임
//                         </h3>
//                         <TextInput 
//                             placeholder='닉네임을 입력해주세요'
//                             helpText='한 글자 이상 입력해 주세요'
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             value='1234'
//                             textInputState={TextInputState.오류}
//                             helpText='영문/숫자/특수문자 조합, 8자~32자'
//                             errorText='올바른 비밀번호를 입력해주세요.'
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             placeholder='검색어를 입력해 주세요'
//                             textInputType={TextInputType.아이콘형}
//                             buttonImg={ic_search_24dp}
//                         />
//                     </div>
//                     <div
//                         style={{
//                             display: 'grid',
//                             rowGap: '10px'
//                         }}
//                     >
//                         <TextInput 
//                             placeholder='검색어를 입력해 주세요'
//                         />
//                         <TextInput 
//                             placeholder='검색어를 입력해 주세요'
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             placeholder='검색어를 입력해 주세요'
//                             textInputType={TextInputType.버튼형}
//                             buttonText='버튼'
//                         />
//                     </div>
//                     <div>
//                         <TextInput 
//                             type={visible ? InputType.텍스트형 : InputType.패스워드형}
//                             placeholder='검색어를 입력해 주세요'
//                             textInputType={TextInputType.아이콘형}
//                             onClick={() => setVisible(!visible)}
//                             buttonImg={visible ? ic_visibility_on_24dp : ic_visibility_off_24dp}
//                         />
//                     </div>
//                 </div>
//                 <h2>Badge</h2>
//                 <div className={cn(styles.badgeSection)}>
//                     <Badge badgeType={BadgeType.모집완료} />
//                     <Badge badgeType={BadgeType.모집중} />
//                     <Badge badgeType={BadgeType.사이드프로젝트} />
//                     <Badge badgeType={BadgeType.지식공뮤및탐구} />
//                     <Badge badgeType={BadgeType.오프라인} />
//                     <Badge badgeType={BadgeType.온라인} />
//                     <Badge badgeType={BadgeType.온오프라인} />
//                 </div>
//                 <h2>AlarmBadge</h2>
//                 <div className={cn(styles.alarmBadgeSection)}>
//                     <AlarmBadge text="8" />
//                     <AlarmBadge text="50" />
//                     <AlarmBadge text="99+" />
//                 </div>
//                 <h2>StudyCard</h2>
//                 <div className={cn(styles.studyCardSection)}>
//                     <StudyCard 
//                         studySeq={0}
//                         title='포트폴리오용'
//                         studyCardType={StudyCardType.북마크형}
//                         recruitType={RecruitType.모집중}
//                         studyType={StudyType.사이드프로젝트}
//                         processType={ProcessType.온오프라인}
//                         bookMark={bookMark4}
//                         onClickBookMark={() => setBookMark4(!bookMark4)}
//                         currentNum={5}
//                         totalNum={10} 
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='알고리즘 스터디 구합니다.' 
//                         studyCardType={StudyCardType.북마크형}
//                         recruitType={RecruitType.모집중} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.온라인} 
//                         bookMark={bookMark5} 
//                         onClickBookMark={() => setBookMark5(!bookMark5)} 
//                         currentNum={2} 
//                         totalNum={5}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.북마크형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='포트폴리오용' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집중} 
//                         studyType={StudyType.사이드프로젝트} 
//                         processType={ProcessType.온오프라인} 
//                         bookMark={bookMark4} 
//                         onClickBookMark={() => setBookMark4(!bookMark4)} 
//                         currentNum={5} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='알고리즘 스터디 구합니다.' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집중} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.온라인} 
//                         bookMark={bookMark5} 
//                         onClickBookMark={() => setBookMark5(!bookMark5)} 
//                         currentNum={2} 
//                         totalNum={5}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                 </div>
//                 <h2>MemberCard</h2>
//                 <div className={cn(styles.menberCardSection)}>
//                     <MemberCard
//                         name='김은성'
//                         profileImg={img_testuser_01}
//                         position="서비스 기획자 ∙ 백엔드 개발자"
//                         skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
//                         bookMark={bookMark1}
//                         onClickBookMark={() => setBookMark1(!bookMark1)}
//                     />
//                     <MemberCard
//                         name='이서윤'
//                         profileImg={img_testuser_02}
//                         position="UX/UI 디자이너"
//                         skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
//                         bookMark={bookMark2}
//                         onClickBookMark={() => setBookMark2(!bookMark2)}
//                     />
//                     <MemberCard
//                         name='박우진'
//                         position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
//                         skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
//                         bookMark={bookMark3}
//                         onClickBookMark={() => setBookMark3(!bookMark3)}
//                     />
//                 </div>
//                 <h2>Select</h2>
//                 <div className={cn(styles.selectSection)}>
//                     <Select 
//                         placeholder='지역을 선택해 주세요'
//                         value={selectedValue1}
//                         onChange={(customChangeEvent: CustomChangeEvent) => {
//                             if (customChangeEvent.value && typeof customChangeEvent.value === 'string') {
//                                 setSelectedValue1(customChangeEvent.value);
//                             }
//                         }}
//                     >
//                         <Options
//                             options={locations}
//                         />
//                     </Select>
//                     <Select 
//                         placeholder="포지션을 선택해 주세요"
//                         value={selectedValue2}
//                         onChange={(customChangeEvent: CustomChangeEvent) => {
//                             if (customChangeEvent.value && typeof customChangeEvent.value === 'string') {
//                                 setSelectedValue2(customChangeEvent.value);
//                             }
//                         }}
//                     >
//                         <GroupOptions
//                             options={positions}
//                         />
//                     </Select>
//                     <Select
//                         placeholder='스킬을 선택해 주세요'
//                         value={selectedValue3}
//                         onChange={(customChangeEvent: CustomChangeEvent) => {
//                             if (customChangeEvent.value && typeof customChangeEvent.value !== 'string') {
//                                 setSelectedValue3(customChangeEvent.value);
//                             }
//                         }}
//                     >
//                         <CheckBoxOptions 
//                             options={skills}
//                         />
//                     </Select>
//                 </div>
//                 <h2>CheckBox</h2>
//                 <div>
//                     <CheckBox 
//                         content='Google Analytics'
//                         selected={selected}
//                         onClick={(content: string, selected: boolean) => setSelected(selected)}/>
//                 </div>
//                 <h2>Textarea</h2>
//                 <div>
//                     <Textarea 
//                         onChange={(content: string) => console.log(content)}
//                     />
//                 </div>
//                 <h2>PositionCard</h2>
//                 <div className={cn(styles.positionCardSection)}>
//                     <PositionCard 
//                         name={'백엔드 개발자'} 
//                         skillTagList={skillTagList} 
//                         recruitmentCount={2} 
//                         currentCount={1} 
//                         apply={true}
//                     />
//                     <PositionCard 
//                         name={'백엔드 개발자'} 
//                         skillTagList={skillTagList} 
//                         recruitmentCount={3} 
//                         currentCount={1} 
//                         apply={false}
//                     />
//                     <PositionCard 
//                         name={'백엔드 개발자'} 
//                         skillTagList={skillTagList} 
//                         recruitmentCount={1} 
//                         currentCount={1} 
//                         apply={false}
//                     />
//                 </div>
//                 <h2>CountButton</h2>
//                 <div>
//                     <CountButton onChangeCount={(value: number) => console.log(value)}/>
//                 </div>
//                 <h2>PositionSelector</h2>
//                 <div className={cn(styles.positionSelectorSection)}>
//                     <PositionSelector 
//                         onSelect={(position) => console.log(position)}
//                     />
//                 </div>
//                 <h2>Calendar</h2>
//                 <div className={cn(styles.calendarSection)}>
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month, index) => (
//                         <Calendar 
//                             key={index}
//                             year={2022}
//                             month={month}
//                             duration={duration1}
//                             onClickDay={(duration: Duration) => {
//                                 setDuration1(duration);
//                             }}
//                         />
//                     ))}
//                 </div>
//                 <h2>CalendarSelect</h2>
//                 <div className={cn(styles.calendarSelectSection)}>
//                     <CalendarSelect
//                         onClick={(duration: Duration) => console.log(duration)}
//                     />
//                 </div>
//                 <h2>Switch</h2>
//                 <div className={cn(styles.switchSection)}>
//                     <Switch onChange={(selected: boolean) => console.log(selected)}/>
//                 </div>
//                 <h2>CircleButton</h2>
//                 <div className={cn(styles.circleButtonSection)}>
//                     <CircleButton 
//                         radius={24}
//                         circleButtonType={CircleButtonType.일반형}
//                         name="김"
//                     />
//                     <CircleButton 
//                         radius={24}
//                         lineHeight={20}
//                         circleButtonType={CircleButtonType.아이콘형}
//                         imgUrl={ic_share_black_20dp}
//                     />
//                     <CircleButton 
//                         radius={24}
//                         circleButtonType={CircleButtonType.이미지형}
//                         imgUrl={img_testuser_01}
//                     />
//                 </div>
//             </div>
//             <div>
//                 <Slider>
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='알고리즘 스터디 구합니다.' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집중} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.온라인} 
//                         bookMark={bookMark5} 
//                         onClickBookMark={() => setBookMark5(!bookMark5)} 
//                         currentNum={2} 
//                         totalNum={5}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='알고리즘 스터디 구합니다.' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집중} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.온라인} 
//                         bookMark={bookMark5} 
//                         onClickBookMark={() => setBookMark5(!bookMark5)} 
//                         currentNum={2} 
//                         totalNum={5}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='알고리즘 스터디 구합니다.' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집중} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.온라인} 
//                         bookMark={bookMark5} 
//                         onClickBookMark={() => setBookMark5(!bookMark5)} 
//                         currentNum={2} 
//                         totalNum={5}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='프론트엔드 스터디' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집완료} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.오프라인} 
//                         bookMark={bookMark6} 
//                         onClickBookMark={() => setBookMark6(!bookMark6)} 
//                         currentNum={10} 
//                         totalNum={10}
//                         skillTags={[]} />
//                     <StudyCard 
//                         studySeq={0} 
//                         title='알고리즘 스터디 구합니다.' 
//                         studyCardType={StudyCardType.편집형}
//                         recruitType={RecruitType.모집중} 
//                         studyType={StudyType.지식공유및탐구} 
//                         processType={ProcessType.온라인} 
//                         bookMark={bookMark5} 
//                         onClickBookMark={() => setBookMark5(!bookMark5)} 
//                         currentNum={2} 
//                         totalNum={5}
//                         skillTags={[]} />
//                 </Slider>
//             </div>
//         </div>
//   );
// }
