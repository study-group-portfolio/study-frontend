import cn from 'classnames';
import styles from 'css/components/modal/ConnectCompleteModal.module.scss';
import img_modal_hand from 'images/img/img_modal_hand.svg';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import { ModalProps } from 'utils/interface';

interface ConnectCompleteModalProps extends ModalProps {

}

export default function ConnectCompleteModal(props: ConnectCompleteModalProps) {
    const onClickGoHome = () => {
        props.onClose();
    }

    const onClickMemberList = () => {
        props.onClose();
    }

    return (
        <div className={cn(styles.overlays)}>
            <div className={cn(styles.modal)}>
                <img src={img_modal_hand} />
                <h3>연락이 완료 되었습니다</h3>
                <p>
                    멤버가 확인되면 알림이 갑니다.
                    <br/>
                    기다리는 동안 다른 멤버들도 둘러보세요!
                </p>
                <div className={styles.btnSection}>
                    <Button
                        buttonName='홈으로 가기'
                        buttonType={ButtonType.서브}
                        onClick={() => onClickGoHome()}
                    />
                    <Button
                        buttonName='다른 멤버 둘러보기'
                        buttonType={ButtonType.기본}
                        onClick={() => onClickMemberList()}
                    />
                </div>
            </div>
        </div>
    )
}