import { TextInputStatus } from "utils/enum";
import { getImgStyle } from "utils/util";
import BaseTextInput from 'components/common/BaseComponent/BaseTextInput';
import styles from 'css/components/common/TextInput.module.scss';
import cn from 'classnames';

interface TextInputButtonProps {
    placeholder: string;
    value: string;
    disabled: boolean;
    img: string;
    status: TextInputStatus;
    onChangeText: Function;
    onClickButton: Function;
}

export default function TextInputIcon(props: TextInputButtonProps) {
    const { placeholder, value, disabled, img, status} = props
    console.log(getImgStyle(img))
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
            <button className={cn(styles.textInputIcon)} style={getImgStyle(img)}></button>
        </div>
    )
}