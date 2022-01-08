import cn from 'classnames';
import styles from 'css/components/common/CheckBox.module.scss';
import { useState } from 'react';
import ic_check_off_18dp from 'images/icon/ic_check_off_18dp.svg';
import ic_check_on_18dp from 'images/icon/ic_check_on_18dp.svg';

interface CheckBoxProps {
    content?: string;
    selected: boolean;
    onClick?: Function;
}

export default function CheckItem(props: CheckBoxProps) {
    const { content, selected } = props;
    const [select, setSelect] = useState(false);

    const onClick = (content?: string, selected?: boolean) => {
        if (props.onClick) {
            props.onClick(content, selected);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <button 
                className={
                    cn(
                        styles.btn,
                        {
                            [styles.button_on]: selected,
                            [styles.button_off]: !selected,
                        }
                    )
                } 
                onClick={() => onClick(content, !selected)}
            ></button>
            <span 
                className={
                    cn(
                        {
                            [styles.span_on]: select,
                            [styles.span_off]: !select,
                        }
                    )
                }
            >
                {content}
            </span>
        </div>
    )
}