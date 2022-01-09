import JoinModal from "components/modal/JoinModal";
import StudyKindModal from "components/modal/StudyKindModal";
import ResultModal from "components/modal/ResultModal";
import Button from 'components/common/Button';
import { ButtonType, StudyType, ResultModalType, ResultType } from 'utils/enum';
import { useState } from 'react';
import cn from 'classnames';
import styles from 'css/pages/test/ModalComponent.module.scss';


export default function Modal() {
    const [openJoinModal, setOpenJoinModal] = useState(false);
    const [openStudyKindModal, setOpenStudyKindModal] = useState(false);
    const [openResultModal1, setOpenResultModal1] = useState(false);
    const [openResultModal2, setOpenResultModal2] = useState(false);
    const [openResultModal3, setOpenResultModal3] = useState(false);
    const [openResultModal4, setOpenResultModal4] = useState(false);
    
    const [studyTypeValue, setStudyTypeValue] = useState(StudyType.지식공유및탐구);

    const stduyInfo = {
        title: '포트폴리오용 프로젝트 팀원 구합니다.',
        position: '백엔드 개발자'
    }

    const memberInfo = {
        name: '조수연',
        position: '서비스 기획자'
    }

    return (
        <div>
            <div className={cn(styles.container)}>
                <Button
                    buttonName="JoinModal"
                    buttonType={ButtonType.기본} 
                    onClick={() => setOpenJoinModal(true)} 
                />
                <Button
                    buttonName="StudyKindModal"
                    buttonType={ButtonType.기본} 
                    onClick={() => setOpenStudyKindModal(true)} 
                />
                <Button
                    buttonName="ResultModal(맴버, 승낙)"
                    buttonType={ButtonType.기본} 
                    onClick={() => setOpenResultModal1(true)} 
                />
                <Button
                    buttonName="ResultModal(맴버, 거절)"
                    buttonType={ButtonType.기본} 
                    onClick={() => setOpenResultModal2(true)} 
                />
                <Button
                    buttonName="ResultModal(스터디, 승낙)"
                    buttonType={ButtonType.기본} 
                    onClick={() => setOpenResultModal3(true)} 
                />
                <Button
                    buttonName="ResultModal(스터디, 거절)"
                    buttonType={ButtonType.기본} 
                    onClick={() => setOpenResultModal4(true)} 
                />
            </div>
            <div>
                {openJoinModal && 
                    <JoinModal 
                        onClose={() => setOpenJoinModal(false)}
                    />
                }
                {openStudyKindModal && 
                    <StudyKindModal 
                        studyTypeValue={studyTypeValue}
                        onClose={() => setOpenStudyKindModal(false)}
                        onClickComplete={(studyType: StudyType) => setStudyTypeValue(studyType)}
                    />
                }
                {openResultModal1 && 
                    <ResultModal 
                        resultModalType={ResultModalType.맴버연락} 
                        resultType={ResultType.승낙}
                        memberInfo={memberInfo}
                        onClose={() => setOpenResultModal1(false)}
                    />
                }
                {openResultModal2 && 
                    <ResultModal 
                        resultModalType={ResultModalType.맴버연락} 
                        resultType={ResultType.거절}
                        memberInfo={memberInfo}
                        onClose={() => setOpenResultModal2(false)}
                    />
                }
                {openResultModal3 && 
                    <ResultModal 
                        resultModalType={ResultModalType.스터디지원} 
                        resultType={ResultType.승낙}
                        studyInfo={stduyInfo}
                        onClose={() => setOpenResultModal3(false)}
                    />
                }
                {openResultModal4 && 
                    <ResultModal 
                        resultModalType={ResultModalType.스터디지원} 
                        resultType={ResultType.거절} 
                        studyInfo={stduyInfo}
                        onClose={() => setOpenResultModal4(false)}
                    />
                }
            </div>
        </div>
    )
}