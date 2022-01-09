import cn from 'classnames';
import styles from 'css/components/modal/JoinModal.module.scss';
import img_join from 'images/img/img_join.svg';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import { ModalProps } from 'utils/interface';
interface JoinModalProps extends ModalProps {

}

export default function JoinModal(props: JoinModalProps) {
    const onClose = () => {
        console.log("동작");
        if (props.onClose) {
            props.onClose();
        }
    }

    return (
        <div className={cn(styles.overlays)}>
            <div className={cn(styles.modal)}>
                <img src={img_join} />
                <h3>스터딧 멤버가 되신 것을 환영해요!</h3>
                <p>프로필을 완성하고 스터디 매칭율을 높여보세요.</p>
                <div className={cn(styles.btnSection)}>
                    <Button 
                        buttonName='나중에 하기'
                        disabled={false}
                        buttonType={ButtonType.서브} 
                        onClick={() => onClose()} 
                    />
                    <Button 
                        buttonName='프로필 완성하기'
                        buttonType={ButtonType.기본} 
                        onClick={() => {}} 
                    />
                </div>
            </div>
        </div>
    )
}