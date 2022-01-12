import cn from 'classnames';
import styles from 'css/components/modal/ConnectModal.module.scss';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import Select from 'components/common/Select';
import Options from 'components/common/Options';
import { ButtonType, InputType, TextInputState, TextInputType } from 'utils/enum';

export default function ConnectModal() {
    return (
        <div className={styles.overlays}>
            <div className={styles.modal}>
                <div className={cn(styles.titleBar)}>
                    <h3>연락하기</h3>
                    <button>
                        <img src={ic_close_24dp} />
                    </button>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.inputSection)}>
                        <Textarea 
                            height="140px"
                        />
                        <div className={cn(styles.textInputSection)}>
                            <Select
                                placeholder="모집 중인 스터디를 선택해 주세요"
                            >
                                <Options 
                                    options={[]}
                                    placeholder="생성한 스터디가 없습니다"
                                />
                            </Select>
                            <Select
                                placeholder="모집 중인 포지션을 선택해 주세요"
                            >
                                <Options />
                            </Select>
                        </div>
                    </div>
                    <div className={cn(styles.btnSection)}>
                        <Button 
                            buttonName="연락하기"
                            buttonType={ButtonType.기본} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}