import cn from 'classnames';
import styles from 'css/components/modal/StudyKindModal.module.scss';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import Button from 'components/common/Button';
import { ButtonType, StudyType } from 'utils/enum'
import { useState, useEffect } from 'react';
import { ModalProps } from 'utils/interface';

interface StudyKindModalProps extends ModalProps {
    studyTypeValue?: StudyType;
    onClickComplete?: (studyType: StudyType) => (void);
}

export default function StudyKindModal(props: StudyKindModalProps) {
    const { studyTypeValue } = props;
    const [studyType, setStudyType] = useState(StudyType.지식공유및탐구);

    const onClickComplete = (studyType: StudyType) => {
        if (props.onClickComplete) {
            props.onClickComplete(studyType)
            props.onClose();
        }
    }

    useEffect(() => {
        if (studyTypeValue) {
            setStudyType(studyTypeValue);
        }
    }, [])

    return (
        <div className={cn(styles.overlays)}>
            <div className={cn(styles.modal)}>
                <div className={styles.titleBar}>
                    <h3>스터디 유형 선택하기</h3>
                    <button onClick={() => props.onClose()}>
                        <img src={ic_close_24dp} alt="닫기"/>
                    </button>
                </div>
                <div className={cn(styles.studyKindSection)}>
                    <button className={cn(
                        styles.btn,
                        {
                            [styles.on]: studyType === StudyType.지식공유및탐구,
                            [styles.off]: studyType !== StudyType.지식공유및탐구
                        })}
                        onClick={() => setStudyType(StudyType.지식공유및탐구)}
                    >지식 공유 및 탐구</button>
                    <button className={cn(
                        styles.btn,
                        {
                            [styles.on]: studyType === StudyType.사이드프로젝트,
                            [styles.off]: studyType !== StudyType.사이드프로젝트
                        })}
                        onClick={() => setStudyType(StudyType.사이드프로젝트)}
                    >사이드 프로젝트</button>
                    <div className={cn(styles.completeBtn)}>
                        <Button
                            buttonName="선택완료" 
                            buttonType={ButtonType.기본}
                            onClick={() => onClickComplete(studyType)}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}