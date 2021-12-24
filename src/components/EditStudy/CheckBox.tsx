import { useState } from 'react';

import cn from 'classnames';
import CheckButton from './CheckButton';

import styles from 'css/components/CheckBox.module.scss';

class CheckBoxProps {
    placeholder: string;
    items: string[];
    marginTop?: string;
    onClickCheckButton: Function;

    constructor(
        placeholder: string, 
        items: string[],
        marginTop: string,
        onClickCheckButton: Function
    ) {
        this.placeholder = placeholder;
        this.items = items;
        this.marginTop = marginTop;
        this.onClickCheckButton = onClickCheckButton;
    }
}

function CheckBox(props: CheckBoxProps) {
    const { placeholder, items, marginTop } = props;
    const [open, setOpen] = useState(false);

    const onClickCheckButton = (item: string, selected: boolean) => {
        props.onClickCheckButton(item, selected);
    }

    const inlineStyle = {
        marginTop,
    }

    return (
        <div className={cn(styles.container)}>
            <div 
                className={cn(styles.title)}
                style={inlineStyle}
                onClick={() => setOpen(!open)}
            >
                {placeholder}
            </div>
            {open && <div className={cn(styles.content)}>
                <div className={cn(styles.list)}>
                    {convertArray2Matrix(items)
                        .map((row, idx) => 
                                <ul key={idx}>
                                    {
                                        row.map((item, index) => 
                                            <CheckButton
                                                key={index}
                                                item={item}
                                                onClickCheckButton={(item: string, selected: boolean) => onClickCheckButton(item, selected)}    
                                            />
                                        )
                                    }
                                </ul>
                            )
                    }
                </div>
            </div>}
        </div>
    )
}

function convertArray2Matrix(list: string[]): string[][] {
    const COLS = 3;
    const ROWS = Math.ceil(list.length / COLS);
    const matrix = [];

    for (let i = 0; i < ROWS; i++) {
        const row = [];
        for (let j = 0; j < COLS; j++) {
            row.push(list[i * COLS + j]);
        }
        matrix.push(row);
    }

    return matrix;
}

export default CheckBox;