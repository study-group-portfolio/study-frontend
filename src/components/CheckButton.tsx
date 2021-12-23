import { useState } from 'react';

import cn from 'classnames';

import styles from '../css/components/CheckButton.module.scss';

class CheckButtonProps {
    item: string;
    onClickCheckButton: Function

    constructor(item: string, onClickCheckButton: Function) {
        this.item = item;
        this.onClickCheckButton = onClickCheckButton;
    }
}

function CheckButton(props: CheckButtonProps) {
    const { item } = props;
    const [selected, setSelected] = useState(false);

    const onClickCheckButton = (item: string, selected: Boolean) => {
        setSelected(!selected);
        props.onClickCheckButton(item, !selected);
    }

    return (
        <li className={cn(styles.container)}>
            <button 
                className={
                    cn(
                        styles.checkBtn, 
                        {
                            [styles.selected]: selected, 
                            [styles.noSelected]: !selected
                        }
                    )
                }
                onClick={() => onClickCheckButton(item, selected)}
            >
                &nbsp;
            </button>
            <span>{item}</span>
        </li>
    )
}

export default CheckButton;