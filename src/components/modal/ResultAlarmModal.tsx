import cn from 'classnames';
import styles from 'css/components/modal/ResultAlarmModal.module.scss';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import img_modal_sad from 'images/img/img_modal_sad.svg';
import img_modal_smile from 'images/img/img_modal_smile.svg';
import { ResultModalType, ResultType } from 'utils/enum';
import { ModalProps } from 'utils/interface';

interface StudyInfo {
    title: string;
    position: string;
}

interface ProfileInfo {
    name: string;
    profileImg?: string;
    position: string;
}

interface ResultModalProps extends ModalProps {
    resultModalType: ResultModalType;
    resultType: ResultType;
    studyInfo?: StudyInfo;
    profileInfo?: ProfileInfo;
}

export default function ResultModal(props: ResultModalProps) {
    const { resultModalType, resultType, studyInfo, profileInfo } = props;

    return (
        <div className={cn(styles.overlays)}>
            <div className={cn(styles.modal)}>
                <button 
                    className={cn(styles.closeBtn)}
                    onClick={() => props.onClose()}
                >
                    <img src={ic_close_24dp} />
                </button>
                {/* 승낙과 거절에 따른 이미지가 변하는 부분 */}
                {resultType === ResultType.승낙 && <img className={cn(styles.emotionImg)} src={img_modal_smile} />}
                {resultType === ResultType.거절 &&<img className={cn(styles.emotionImg)} src={img_modal_sad} />}
                {/* 승낙과 거절에 따른 문구가 변하는 부분 */}
                {resultType === ResultType.승낙 && <h3>환영합니다 같이 스터딧해요!</h3>}
                {resultType === ResultType.거절 && <h3>다음 기회에 함께해요</h3>}
                <p>
                    {resultType === ResultType.승낙 && resultModalType === ResultModalType.스터디지원 && '지원이 수락되었습니다.'}
                    {resultType === ResultType.승낙 && resultModalType === ResultModalType.맴버연락 && '스터디 제안이 수락되었습니다.'}
                    {resultType === ResultType.거절 && resultModalType === ResultModalType.스터디지원 && '지원이 거절되었습니다.'}
                    {resultType === ResultType.거절 && resultModalType === ResultModalType.맴버연락 && '스터디 제안이 거절되었습니다.'}
                    <br/>
                    {resultType === ResultType.승낙 && '함께 성장할 준비가 되었어요.'}
                    {resultType === ResultType.거절 && resultModalType === ResultModalType.스터디지원 && '더 맞는 스터디를 찾을 수 있을 거에요.'}
                    {resultType === ResultType.거절 && resultModalType === ResultModalType.맴버연락 && '더 맞는 멤버를 찾을 수 있을 거에요.'}
                </p>
                {resultModalType === ResultModalType.스터디지원 && 
                <div className={cn(styles.studyInfo)}>
                    <h3>{studyInfo?.title}</h3>
                    <p>{studyInfo?.position}</p>
                </div>}
                {resultModalType === ResultModalType.맴버연락 && 
                <div className={cn(styles.profileInfo)}>
                    <span className={cn(styles.circle_50)}>{profileInfo?.profileImg || profileInfo?.name?.charAt(0)}</span>
                    <span className={cn(styles.txt)}>
                        <p>{profileInfo?.name}</p>
                        <p>{profileInfo?.position}</p>
                    </span>
                </div>}
            </div>
        </div>
    )
}