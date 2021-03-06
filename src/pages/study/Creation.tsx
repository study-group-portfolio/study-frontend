import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useGoPage, useQuery } from 'utils/custom-hook';

import styles from 'css/pages/study/Creation.module.scss';
import cn from 'classnames';
import Textarea from 'components/common/Textarea';
import RadioButton from 'components/common/RadioBox';
import Select from 'components/common/Select';
import Options from 'components/common/Options';
import PositionSelector from 'components/common/Selector';
import CalendarSelect from 'components/common/CalednarSelect';
import CheckBoxOptions from 'components/common/CheckBoxOptions';
import Button from 'components/common/Button';
import Switch from 'components/common/Switch';
import { ButtonType, Path, ProcessType, StudyType } from 'utils/enum';
import { CustomChangeEvent, Duration, GroupOption, Position, StudyRequest } from 'utils/interface'
import { STUDY_EDIT_CONSTANT } from 'utils/constant';
import { postStudy } from 'api/studyAPI';

function StudyCreation() {
    const query = useQuery();
    const goMain = useGoPage(Path.메인);

    const [studyRequest, setStudyRequest] = useState<StudyRequest>({
        type: query['studyType'], 
        title: '', 
        profileShare: false,
        content: '',
        status: ProcessType.온라인,
        region: '',
        duration: '',
        studyDay: '',
        positions: [],
        receptionStart: moment().format('YYYY-MM-DD'),
        receptionEnd: moment().add(14, 'day').format('YYYY-MM-DD'),
    });

    async function registerStudy(studyRequest: StudyRequest) {
        try {
            await postStudy(studyRequest);
            goMain();
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.content)}>
                <div className={cn(styles.title)}>
                    <input 
                        type="text" 
                        placeholder="제목을 입력하세요" 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setStudyRequest({...studyRequest, title: event.target.value});
                        }} />
                </div>
                <div className={cn(styles.body)}>
                    {/* <div className={cn(styles.section)}>
                        <h3>내 프로필 공개</h3>
                        <div className={cn(styles.profileContent)}>
                            <Switch onChange={(profileOn: boolean) => setStudyRequest({...studyRequest, profileOn})} />
                            <span className={cn(styles.txt)}>내 프로필을 공개하면 지원율이 높아져요!</span>
                        </div>
                    </div> */}
                    <div className={cn(styles.section)}>
                        <h3>스터디 소개</h3>
                        <Textarea 
                            placeholder={STUDY_EDIT_CONSTANT.소개글_PLACEHOLDER}
                            maxCharNum={STUDY_EDIT_CONSTANT.소개글_최대_글자수}
                            onChange={(content: string) => setStudyRequest({...studyRequest, content})}
                        />
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>진행방식</h3>
                        <RadioButton<ProcessType>
                            radios={STUDY_EDIT_CONSTANT.진행방식_목록}
                            onClick={(status: ProcessType) => setStudyRequest({...studyRequest, status})}
                        />
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>활동지역</h3>
                        <Select
                            placeholder='지역을 선택해 주세요'
                            value={studyRequest.region}
                            onChange={(customChangeEvent: CustomChangeEvent) => {
                                const region = customChangeEvent.value;
                                if (typeof region === 'string') {
                                    setStudyRequest({...studyRequest, region})
                                }
                            }}
                        >
                            <Options
                                options={STUDY_EDIT_CONSTANT.활동지역_목록}
                            />
                        </Select>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>예상 진행 기간</h3>
                        <div className={cn(styles.durationContent)}>
                            <Select
                                placeholder="기간"
                                value={studyRequest.duration}
                                onChange={(event: CustomChangeEvent) => {
                                    const duration = event.value;
                                    setStudyRequest({...studyRequest, duration});
                                }}
                            >
                                <Options<string>
                                    options={STUDY_EDIT_CONSTANT.기간_목록}
                                />
                            </Select>
                            <div className={cn(styles.txtContent)}>
                                <span className={cn(styles.txt)}>동안</span>
                            </div>
                            <Select
                                placeholder="주중/주말"
                                value={studyRequest.studyDay}
                                onChange={(event: CustomChangeEvent) => {
                                    const studyDay = event.value;
                                    setStudyRequest({...studyRequest, studyDay});
                                }}
                            >
                                <Options<string>
                                    options={STUDY_EDIT_CONSTANT.주중_주말_목록}
                                />
                            </Select>
                            <div className={cn(styles.txtContent)}>
                                <span className={cn(styles.txt)}>에 진행 예정입니다.</span>
                            </div>
                        </div>
                    </div>
                    {query['studyType']  && <div className={cn(styles.section)}>
                        {query['studyType'] === StudyType.사이드프로젝트 &&<h3>모집 포지션</h3>}
                        {query['studyType'] === StudyType.지식공유및탐구 &&<h3>관심 스킬</h3>}
                        <PositionSelector
                            studyType={query['studyType']}
                            onSelect={(positions: Position[]) => setStudyRequest({...studyRequest, positions})}
                        />
                    </div>}
                    <div className={cn(styles.section)}>
                        <h3>팀원 모집기간</h3>
                        <CalendarSelect 
                            onClick={({startDate, endDate}: Duration) => setStudyRequest(
                                {
                                    ...studyRequest, 
                                    receptionStart: startDate || '', 
                                    receptionEnd: endDate || ''
                                }
                            )}
                        />
                    </div>
                    {/* <div className={cn(styles.section)}>
                        <h3>협업 툴</h3>
                        <Select
                            placeholder="선호하는 협업 툴을 선택해 주세요"
                        >
                            <CheckBoxOptions
                                options={STUDY_EDIT_CONSTANT.협업_툴_목록}
                            />
                        </Select>
                    </div> */}
                </div>
            </div>
            <div className={cn(styles.side)}>
                <div className={cn(styles.card)}>
                    {/* <Button
                        buttonName='임시 저장하기'
                        buttonType={ButtonType.서브}
                        onClick={() => console.log(studyRequest)}
                    /> */}
                    <Button
                        buttonName='저장하기'
                        buttonType={ButtonType.기본}
                        onClick={() => registerStudy(studyRequest)}
                    />
                </div>
            </div>
        </div>
    )
}

export default StudyCreation;