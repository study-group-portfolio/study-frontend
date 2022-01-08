import cn from 'classnames';
import styles from 'css/components/common/CheckBox.module.scss';
import { useState } from 'react';
import ic_check_off_18dp from 'images/icon/ic_check_off_18dp.svg';
import ic_check_on_18dp from 'images/icon/ic_check_on_18dp.svg';

interface CheckItemProps {
    content: string;
    onClick: Function;
}

export default function CheckItem(props: CheckItemProps) {
    const { content } = props;
    const [select, setSelect] = useState(false);

    const onClick = (content: string) => {
        setSelect(prev => {
            props.onClick(content, !prev);
            return !prev;
        });
        
    }

    return (
        <div className={cn(styles.container)}>
            <button 
                className={
                    cn(
                        styles.btn,
                        {
                            [styles.button_on]: select,
                            [styles.button_off]: !select,
                        }
                    )
                } 
                onClick={() => onClick(content)}
            >
                {!select && <img src={ic_check_off_18dp} />}
                {select && <img src={ic_check_on_18dp} />}
            </button>
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