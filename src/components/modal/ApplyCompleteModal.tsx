import cn from 'classnames';
import styles from 'css/components/modal/ApplyCompleteModal.module.scss';
import img_apply_complete from 'images/img/img_apply_complete.svg';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import { ModalProps } from 'utils/interface';

interface ApplyCompleteModalProps extends ModalProps {
    onClickGoHome?: Function;
    onClickCompleteProfile?: Function;
}

export default function ApplyCompleteModal(props: ApplyCompleteModalProps) {
    const onClickGoHome = () => {
        if (props.onClickGoHome) {
            props.onClickGoHome();
        }
        props.onClose();
    }

    const onClickCompleteProfile = () => {
        if (props.onClickCompleteProfile) {
            props.onClickCompleteProfile();
        }
        props.onClose();
    }

    return (
        <div className={cn(styles.overlays)}>
            <div className={cn(styles.modal)}>
                <img src={img_apply_complete} />
                <h3>지원이 완료되었습니다.</h3>
                <p>
                    결과는 방장 확인 후 알림으로 알려드려요.
                    <br/>
                    기다리는 동안 프로필을 완성해보세요!
                </p>
                <div className={cn(styles.btnSection)}>
                    <Button
                        buttonName="홈으로 가기"
                        buttonType={ButtonType.서브}
                        onClick={() => onClickGoHome()}
                    />
                    <Button
                        buttonName="프로필 완성하기"
                        buttonType={ButtonType.기본}
                        onClick={() => onClickCompleteProfile()}
                    />
                </div>
            </div>
        </div>
    )
}