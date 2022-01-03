import React, { useState } from 'react';
import moment from 'moment';
import { useQuery } from 'utils/custom-hook';

import ToggleButton from 'components/EditStudy/ToggleButton';
import SelectBox from 'components/EditStudy/SelectBox';
import PositionBox from 'components/EditStudy/PositionBox';
import SelectCalendar from 'components/EditStudy/SelectCalendar';
import CheckBox from 'components/EditStudy/CheckBox';

import styles from 'css/study/Creation.module.scss';
import cn from 'classnames';

function StudyCreation() {
    const query = useQuery();

    const [toggle, setToggle] = useState(false);
    const [introduction, setIntroduction] = useState('');
    const [process, setProcess] = useState('online')
    const [interval, setInterval]: [string[], Function] = useState([]);
    const [collaborationToolSelectedList, setCollaborationToolSelectedList] = useState(Array<string>());
    const [skillSelectedList, setSkillSelectedList] = useState(Array<string>());

    const introuductionPlaceholder = `예시)
- 스터디 목적: 포트폴리오용 프로젝트
- 스터디 주제: 이커머스 서비스 개발
- 스터디 목표: AWS 배포
- 현 진행 상황: 기획 진행 중
- 기타: 현업 실무자, 취준생 누구든 환영합니다!
    `;

    const locationList = [
        '서울', 
        '부산', 
        '대구', 
        '인천', 
        '광주', 
        '대전', 
        '울산', 
        '세종', 
        '경기', 
        '강원', 
        '충북', 
        '충남', 
        '전북', 
        '전남', 
        '경북', 
        '경남', 
        '제주'
    ];
    const periodList = ['일주일', '한 달', '두 달', '세 달', '네 달', '다섯 달 이상'];
    const dayList = ['주말', '주중', '주말과 주중', '협의한 요일'];
    const collaborationToolList = [
        '미지정', 'Asana', 'JANDI', 
        'Google Meet', 'Trello', 'Notion', 
        'Zoom', 'Slack', 'collabee', 
        'GitHub', 'Microsoft Teams', 'Dropbox Paper', 
        'Jira', 'NAVER WORKS', 'Quip'
    ];
    const postionGroupList = [
        {
            name: '기획',
            list: ['서비스 기획자', '게임 기획자', 'PM·PO', '데이터 분석가']
        },
        {
            name: '디자인',
            list: ['UX/UI 디자이너', 'UX디자이너', 'UI,GUI디자이너', '그래픽 디자이너', '3D 디자이너'],
        },
        {
            name: '개발',
            list: ['프론트엔드 개발자', '웹 개발자', '서버 개발자', '자바 개발자', '웹 퍼블리셔']
        }
    ];
    const skillList = [
        'Google Analytics', 'Spring', 'Amplitude',
        'React.js', 'Adobe Photoshop', 'Amazon AWS',
        'Adobe illustrator', 'MySQL', 'Adobe XD',
        'JavaScript', 'Figma', 'jQuery',
        'Framer', 'C++', 'Sketch',
        'C#', 'zeplin', 'Java',
        'iOS', 'PHP', 'Android',
        'Python', 'html/css', 'Pycharm'
    ]

    const onChangeIntroduction = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= INTRODUCTION_MAX_SIZE) {
            setIntroduction(event.target.value);
        }
    }

    const onClickCheckButtonSkill = (item: string, selected: boolean) => {
        if (selected) {
            setCollaborationToolSelectedList([...collaborationToolSelectedList, item]);
        } else {
            setCollaborationToolSelectedList(collaborationToolSelectedList.filter(elmt => elmt !== item));
        }
    }

    const onSelectCalendar = (date: string) => {
        if (interval.length === 1) {
            const startDate = interval[0];

            if (moment(startDate).isAfter(date)) {
                setInterval([date, startDate])
            } else {
                setInterval([startDate, date])
            }
        } else {
            setInterval([date]);
        }
    }

    const onClickCheckButtonCollaborationTool = (item: string, selected: boolean) => {
        if (selected) {
            setSkillSelectedList([...skillSelectedList, item]);
        } else {
            setSkillSelectedList(skillSelectedList.filter(elmt => elmt !== item));
        }
    }

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.buttonBox)}>
                <button className={cn(styles.btn, styles.temp)}>임시 저장하기</button>
                <button className={cn(styles.btn, styles.save)}>저장하기</button>
            </div>
            <div className={cn(styles.titleSection)}>
                <input className={cn(styles.titleInput)}type="text" placeholder="제목을 입력하세요"/>
            </div>
            <div className={cn(styles.profile)}>
                <span className={cn(styles.title)}>내 프로필 공개</span>
                <div>
                    <ToggleButton
                        toggle={toggle}
                        onChangeToggle={(toggle: boolean) => setToggle(toggle)}
                    />
                    <span className={cn(styles.text)}>내 프로필을 공개하면 지원율이 높아져요!</span>
                </div>
            </div>
            <div className={cn(styles.introduction)}>
                <span className={cn(styles.title)}>스터디 소개</span>
                <textarea 
                    className={cn(styles.content)} 
                    placeholder={introuductionPlaceholder}
                    value={introduction}
                    onChange={onChangeIntroduction}
                />
                <span className={cn(styles.textSize)}>({introduction.length}/{INTRODUCTION_MAX_SIZE})</span>
            </div>
            <div className={cn(styles.process)}>
                <span className={cn(styles.title)}>진행 방식</span>
                <div className={cn(styles.buttonGroup)}>
                    <button 
                        className={
                            cn(
                                styles.button, 
                                styles.left,
                                {
                                    [styles.on]: process === 'online',
                                    [styles.off]: process !== 'online'
                                }
                            )
                        }
                        onClick={() => setProcess('online')}
                    >
                        온라인
                    </button>
                    <button 
                        className={
                            cn(
                                styles.button, 
                                {
                                    [styles.on]: process === 'offline',
                                    [styles.off]: process !== 'offline'
                                }
                            )
                        }
                        onClick={() => setProcess('offline')}
                    >
                        오프라인
                    </button>
                    <button 
                        className={
                            cn(
                                styles.button, 
                                styles.right,
                                {
                                    [styles.on]: process === 'on-offline',
                                    [styles.off]: process !== 'on-offline'
                                }
                            )
                        }
                        onClick={() => setProcess('on-offline')}
                    >
                        온/오프라인 병행
                    </button>
                </div>
            </div>
            <div className={cn(styles.location)}>
                <span className={cn(styles.title)}>활동 지역</span>
                <SelectBox 
                    width="790px"
                    marginTop="8px"
                    placeholder="지역을 선택해 주세요"
                    items={locationList}
                    type="O"
                ></SelectBox>
            </div>
            <div className={cn(styles.expectPeriod)}>
                <span className={cn(styles.title)}>예상 진행 기간</span>
                <div className={cn(styles.content)}>
                    <SelectBox
                        key={1} 
                        width="293px"
                        marginTop="0px"
                        placeholder="기간"
                        items={periodList}
                        type="O"
                    ></SelectBox>
                    <span className={cn(styles.txt)}>동안</span>
                    <SelectBox
                        key={2}  
                        width="293px"
                        marginTop="0px"
                        placeholder="주중/주말"
                        items={dayList}
                        type="O"
                    ></SelectBox>
                    <span className={cn(styles.txt)}>에 진행 예정입니다.</span>
                </div>
            </div>
            {query.get('kind') === 'project' &&<div className={cn(styles.role)}>
                <span className={cn(styles.title)}>업무 포지션</span>
                <div className={cn(styles.enroll)}>
                    <SelectBox 
                        width="790px"
                        marginTop="8px"
                        placeholder="포지션을 선택해 주세요"
                        items={postionGroupList}
                        type="G"
                    ></SelectBox>
                    <CheckBox
                        placeholder="스킬을 선택해 주세요"
                        items={skillList}
                        marginTop="10px"
                        onClickCheckButton={(item: string, selected: boolean) => onClickCheckButtonSkill(item, selected)}
                    />
                    <button className={cn(styles.completeBtn)}>선택완료</button>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.noContent)}>선택 완료를 눌러 추가해 주세요</div>
                </div>
            </div>}
            {query.get('kind') === 'knowledge' &&<div className={cn(styles.role)}>
                <span className={cn(styles.title)}>관심 스킬</span>
                <div className={cn(styles.enroll)}>
                    <CheckBox
                        placeholder="스킬을 선택해 주세요"
                        items={skillList}
                        marginTop="10px"
                        onClickCheckButton={(item: string, selected: boolean) => onClickCheckButtonSkill(item, selected)}
                    />
                    <button className={cn(styles.completeBtn)}>선택완료</button>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.noContent)}>선택 완료를 눌러 추가해 주세요</div>
                </div>
            </div>}
            <div className={cn(styles.period)}>
                <span className={cn(styles.title)}>팀원 모집기간</span>
                <SelectCalendar 
                    interval={interval} 
                    onSelectCalendar={onSelectCalendar}
                ></SelectCalendar>
            </div>
            <div className={cn(styles.tool)}>
            <span className={cn(styles.title)}>협업 툴</span>
                <CheckBox 
                    placeholder="선호하는 협업 툴을 선택해주세요"
                    items={collaborationToolList}
                    onClickCheckButton={(item: string, selected: boolean) => onClickCheckButtonCollaborationTool(item, selected)}
                />
            </div>
        </div>
    )
}

// 스터디 소개 최대 글자 제한 수
const INTRODUCTION_MAX_SIZE = 200;

export default StudyCreation;