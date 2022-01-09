import cn from 'classnames';
import styles from 'css/components/modal/RequestAlarmModal.module.scss';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import { ModalProps, StudyInfo, ProfileInfo } from 'utils/interface';

interface RequestAlarmModal extends ModalProps {
    profileInfo?: ProfileInfo;
    studyInfo?: StudyInfo;
    introduction?: string;
    onPermit: Function;
    onReject: Function;
}

export default function RequestAlarmModal(props: RequestAlarmModal) {
    const { profileInfo, studyInfo, introduction } = props;

    const onPermit = () => {
        props.onPermit();
        props.onClose();
    }

    const onReject = () => {
        props.onReject();
        props.onClose();
    }

    return (
        <div className={cn(styles.overlays)}>
            <div className={cn(styles.modal)}>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.top)}>
                        <div className={cn(styles.profile)}>
                            <span className={cn(styles.circle_50)}>{profileInfo?.profileImg || profileInfo?.name?.charAt(0)}</span>
                            <span className={cn(styles.info)}>
                                <p className={cn(styles.txt)}>{profileInfo?.name}</p>
                                <p className={cn(styles.txt)}>{profileInfo?.position}</p>
                            </span>
                        </div>
                        <div>
                            <button 
                                className={cn(styles.closeBtn)}
                                onClick={() => props.onClose()}
                            >
                                <img src={ic_close_24dp} />
                            </button>
                        </div>
                    </div>
                    <div className={cn(styles.study)}>
                        <h3 className={cn(styles.title)}>{studyInfo?.title}</h3>
                        <p className={cn(styles.position)}>{studyInfo?.position}</p>
                    </div>
                    <p className={cn(styles.introudctuion)}>{introduction}</p>
                </div>
                <div className={cn(styles.btnSection)}>
                    <Button 
                        buttonName="거절하기"
                        buttonType={ButtonType.서브}
                        onClick={() => onReject()}
                    />
                    <Button 
                        buttonName="수락하기"
                        buttonType={ButtonType.기본} 
                        onClick={() => onPermit()}
                    />
                </div>
            </div>
        </div>
    )
}