import cn from 'classnames';
import { TextInputState, TextInputType, InputType } from 'utils/enum';
import styles from 'css/components/common/TextInput.module.scss';
import { useState } from 'react';

interface TextInputProps {
    placeholder?: string;
    type?: InputType;
    value?: string;
    disabled?: boolean;
    buttonText?: string;
    buttonImg?: string;
    helpText?: string;
    errorText?: string;
    textInputState?: TextInputState;
    textInputType?: TextInputType;
    onChange?: Function;
    onClick?: Function;
}

export default function TextInput(props: TextInputProps) {
    const { 
        placeholder, 
        type,
        value, 
        disabled, 
        buttonText,
        buttonImg,
        helpText,
        errorText,
        textInputState, 
        textInputType 
    } = props;
    const [text, setText] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        if (props.onChange) {
            props.onChange(event);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <div
                style={getTextInputGridStyle(textInputType, buttonText)}
                className={
                    cn(
                        styles.textInputContainer,
                        {
                            [styles.default]: !textInputState || textInputState === TextInputState.기본값,
                            [styles.success]: textInputState === TextInputState.성공,
                            [styles.error]: textInputState === TextInputState.오류
                        }
                    )
                }
            >
                <input 
                    type={type ? type : InputType.텍스트형}
                    placeholder={placeholder} 
                    value={value ? value : text} 
                    disabled={disabled}
                    onChange={(event) => onChange(event)}
                />
                {(!textInputType || textInputType !== TextInputType.일반형) && 
                <button 
                    type='button'
                    className={
                        cn(
                            {
                                [styles.textInputButton]: textInputType === TextInputType.버튼형
                            }
                        )
                    }
                    onClick={(event) => props.onClick ? props.onClick(event) : undefined}
                >
                    {textInputType === TextInputType.버튼형 && <span>{buttonText}</span>}
                    {textInputType === TextInputType.아이콘형 && <img src={buttonImg} />}
                </button>}
            </div>
            {helpText && <p className={cn(styles.helpText)}>{helpText}</p>}
            {textInputState === TextInputState.오류 && errorText && <p className={cn(styles.errorText)}>{errorText}</p>}
        </div>
    )
}

function getTextInputGridStyle(textInputType?: TextInputType, buttonText?: string) {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: ''
    }

    if (!textInputType || textInputType === TextInputType.일반형) {
        gridStyle.gridTemplateColumns = '100%';
    } else if (textInputType === TextInputType.버튼형) {
        const fontSize = (buttonText ? buttonText.length * 15 : 0) + 31;
        gridStyle.gridTemplateColumns = `calc(100% - ${fontSize}px) ${fontSize}px`; 
    } else if (textInputType === TextInputType.아이콘형) {
        gridStyle.gridTemplateColumns = 'calc(100% - 39px) 39px';
    }

    return gridStyle;
}