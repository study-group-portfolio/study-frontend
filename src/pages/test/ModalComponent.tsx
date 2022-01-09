import JoinModal from "components/modal/JoinModal";
import StudyKindModal from "components/modal/StudyKindModal";
import Button from 'components/common/Button';
import { ButtonType, StudyType } from 'utils/enum';
import { useState } from 'react';
import cn from 'classnames';
import styles from 'css/pages/test/ModalComponent.module.scss';


export default function Modal() {
    const [openJoinModal, setOpenJoinModal] = useState(false);
    const [openStudyKindModal, setOpenStudyKindModal] = useState(false);

    const [studyTypeValue, setStudyTypeValue] = useState(StudyType.지식공유및탐구);
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
            </div>
        </div>
    )
}