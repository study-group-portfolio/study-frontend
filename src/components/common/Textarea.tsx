import cn from 'classnames';
import styles from 'css/components/common/Textarea.module.scss';
import { useState, useCallback } from 'react';

interface TextareaProps {
    placeholder?: string;
    maxCharNum?: number;
    height?: string;
    onChange?: (content: string) => (void);
}

export default function Textarea(props: TextareaProps) {
    const maxCharNum = props.maxCharNum ? props.maxCharNum : MAX_CHAR_NUM;
    const { height, placeholder } = props;

    const [value, setValue] = useState('');
    const [charNum, setCharNum] = useState(0);

    const getHeightStyle = useCallback((height: string) => {return {height}}, [height]);

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const length = event.target.value.length;

        if (length > maxCharNum) return;

        setValue(event.target.value);
        setCharNum(event.target.value.length);

        if (props.onChange) {
            props.onChange(event.target.value);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <textarea
                style={getHeightStyle(height || '190px')}
                className={cn(styles.textarea)}
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event)}
            ></textarea>
            <span>({charNum}/{maxCharNum})</span>
        </div>
    )
}

const MAX_CHAR_NUM = 200;