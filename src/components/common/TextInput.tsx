import cn from 'classnames';
import { TextInputStatus } from 'utils/enum';
import styles from 'css/components/common/TextInput.module.scss';

interface TextInputProps {
    placeholder: string;
    value: string;
    disabled: boolean;
    status: TextInputStatus;
    onChangeText: Function;
}

export default function TextInput(props: TextInputProps) {
    const { placeholder, value, disabled, status } = props;

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
            <input 
                type="text"
                placeholder={placeholder} 
                value={value} 
                disabled={disabled}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChangeText(event.target.value)}
            />
        </div>
    )
}