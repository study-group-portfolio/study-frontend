import BaseTextInput from 'components/common/BaseComponent/BaseTextInput';
import { TextInputStatus } from 'utils/enum';
import cn from 'classnames';
import styles from 'css/components/common/TextInput.module.scss';

interface BaseTextInputButtonProps {
    placeholder: string;
    value: string;
    disabled: boolean;
    buttonName: string;
    status: TextInputStatus;
    onChangeText: Function;
    onClickButton: Function;
}

export default function TextInputButton(props: BaseTextInputButtonProps) {
    const { placeholder, value, disabled, buttonName, status } = props;
    return (
        <div
            className={
                cn(
                    styles.container,
                    {
                        [styles.default]: status === TextInputStatus.기본값,
                        [styles.success]: status === TextInputStatus.성공,
                        [styles.error]: status === TextInputStatus.오류
                    }
                )
            }
        >
            <BaseTextInput 
                placeholder={placeholder} 
                value={value} 
                disabled={disabled} 
                onChangeText={(value: string) => props.onChangeText(value)} 
            />
            <button
                className={cn(styles.textInputButton)}
                onClick={() => props.onClickButton()}
            >
                {buttonName}
            </button>
        </div>
    )
}