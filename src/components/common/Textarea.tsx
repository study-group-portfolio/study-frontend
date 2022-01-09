import cn from 'classnames';
import styles from 'css/components/common/Textarea.module.scss';
import { useState } from 'react';

interface TextareaProps {
    maxCharNum?: number;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => (void);
}

export default function Textarea(props: TextareaProps) {
    const maxCharNum = props.maxCharNum ? props.maxCharNum : MAX_CHAR_NUM;
    const [value, setValue] = useState('');
    const [charNum, setCharNum] = useState(0);

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const length = event.target.value.length;

        if (length > maxCharNum) return;

        setValue(event.target.value);
        setCharNum(event.target.value.length);

        if (props.onChange) {
            props.onChange(event);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <textarea 
                className={cn(styles.textarea)}
                value={value}
                onChange={(event) => onChange(event)}
            ></textarea>
            <span>({charNum}/{maxCharNum})</span>
        </div>
    )
}

const MAX_CHAR_NUM = 200;