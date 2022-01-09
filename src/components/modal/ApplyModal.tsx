import cn from 'classnames';
import styles from 'css/components/modal/ApplyModal.module.scss';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import { ModalProps } from 'utils/interface';

interface ApplyModalProps extends ModalProps {
    onSubmit?: Function;
}

export default function ApplyModal(props: ApplyModalProps) {
    const onSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit();
        }
    }

    return (
        <div className={cn(styles.overlays)}>
            <div className={cn(styles.modal)}>
                <div className={cn(styles.titleBar)}>
                    <h3>지원하기</h3>
                    <button onClick={() => props.onClose()}>
                        <img src={ic_close_24dp} />
                    </button>
                </div>
                <div className={cn(styles.textSection)}>
                    <Textarea 
                        height='140px'
                        placeholder={PLACE_HOLDER}
                    />
                </div>
                <div className={cn(styles.btnSection)}>
                    <Button
                        buttonName="지원하기"
                        buttonType={ButtonType.기본}
                        onClick={() => onSubmit()}
                    />
                </div>
            </div>
        </div>
    )
}

const PLACE_HOLDER = '예시) 안녕하세요! 1년 차 UX/UI 디자이너 이서윤입니다. 기획과 UX리서치 경험이 있으며 취미로 코딩을 공부 하고 있습니다';