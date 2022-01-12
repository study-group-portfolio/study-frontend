import cn from 'classnames';
import styles from 'css/components/modal/ConnectModal.module.scss';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import Select from 'components/common/Select';
import Options from 'components/common/Options';
import { ButtonType, InputType, TextInputState, TextInputType } from 'utils/enum';
import { useState } from 'react';
import { CustomChangeEvent } from 'utils/interface';
import { ModalProps } from 'utils/interface';
interface ConnectModalProps extends ModalProps {
    onSubmit?: Function;
}

export default function ConnectModal(props: ConnectModalProps) {
    const [study, setStudy] = useState('');
    const [position, setPosition] = useState('');

    const onSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit();
        }
        props.onClose();
    }

    return (
        <div className={styles.overlays}>
            <div className={styles.modal}>
                <div className={cn(styles.titleBar)}>
                    <h3>연락하기</h3>
                    <button onClick={() => props.onClose()}>
                        <img src={ic_close_24dp} />
                    </button>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.inputSection)}>
                        <Textarea 
                            height="140px"
                            placeholder='예시) 안녕하세요. 저는 3년차 백엔드 개발자입니다. 프로필을 보고 함께 스터디 하고 싶어서 연락드립니다.'
                        />
                        <div className={cn(styles.textInputSection)}>
                            <Select
                                value={study}
                                placeholder="모집 중인 스터디를 선택해 주세요"
                                onChange={(customChangeEvent: CustomChangeEvent) => {
                                    if (customChangeEvent.value && typeof customChangeEvent.value === 'string') {
                                        setStudy(customChangeEvent.value);
                                    }
                                }}
                            >
                                <Options 
                                    options={['{유저가 생성한 스터디 2}(최신순으로 sort)', '{유저가 생성한 스터디 1}']}
                                    placeholder="생성한 스터디가 없습니다"
                                />
                            </Select>
                            <Select
                                value={position}
                                placeholder="모집 중인 포지션을 선택해 주세요"
                                onChange={(customChangeEvent: CustomChangeEvent) => {
                                    if (customChangeEvent.value && typeof customChangeEvent.value === 'string') {
                                        setPosition(customChangeEvent.value);
                                    }
                                }}
                            >
                                <Options 
                                    options={['백엔드 개발자', '프론트엔드 개발자']}
                                />
                            </Select>
                        </div>
                    </div>
                    <div className={cn(styles.btnSection)}>
                        <Button 
                            buttonName="연락하기"
                            buttonType={ButtonType.기본}
                            onClick={() => onSubmit()} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}