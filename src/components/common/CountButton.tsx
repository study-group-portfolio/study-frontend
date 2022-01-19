import cn from 'classnames';
import styles from 'css/components/common/CountButton.module.scss';
import ic_remove_18dp from 'images/icon/ic_remove_18dp.svg';
import ic_add_18dp from 'images/icon/ic_add_18dp.svg';
import { useState } from 'react';

interface CountButtonProps {
    onChangeCount: (value: number) => (void);
}

export default function CountButton(props: CountButtonProps) {
    const [value, setValue] = useState(0);
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[\u0000-\u002F]|[\u003A-\uFFFF]/g, '');
        if (value.length > 2) return;
        setValue(Number(value));
        props.onChangeCount(Number(value));
    }

    const onClickRemove = () => {
        setValue(prev => {
            const value = prev > 0 ? prev - 1 : prev;
            props.onChangeCount(value);
            return value;
        });
    }

    const onClickAdd = () => {
        setValue(prev => {
            const  value = prev < 99 ? prev + 1 : prev;
            props.onChangeCount(value);
            return value;
        });
    }

    return (
        <div className={cn(styles.container)}>
            <button 
                className={cn(styles.removeBtn)}
                onClick={() => onClickRemove()}
            >
                <img src={ic_remove_18dp} />
            </button>
            <div className={cn(styles.input)}>
                <input 
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event)}
                />
                <span>명</span>
            </div>
            <button 
                className={cn(styles.addBtn)}
                onClick={() => onClickAdd()}
            >
                <img src={ic_add_18dp} />
            </button>
        </div>
    )
}