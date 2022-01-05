import { 
    ProcessType, 
    RecruitType, 
    StudyType, 
    ButtonType, 
    TextInputState, 
    TextInputType, 
    InputType,
    BadgeType
} from 'utils/enum';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import Badge from 'components/common/Badge';
import AlarmBadge from 'components/common/AlarmBadge';
import MemberCard from 'components/common/MemberCard';
import styles from 'css/pages/Component.module.scss';
import cn from 'classnames';
import ic_search_24dp from 'images/icon/ic_search_24dp.svg';
import img_testuser_01 from 'images/img/img_testuser_01.svg';
import img_testuser_02 from 'images/img/img_testuser_02.svg';
import { useState } from 'react';

export default function Test() {
    /** 북마크 설정 관련 변수 */
    const [bookMark1, setBookMark1] = useState(false);
    const [bookMark2, setBookMark2] = useState(false);
    const [bookMark3, setBookMark3] = useState(false);

    return (
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
        </div>
    )
}