import cn from 'classnames';
import styles from 'css/components/common/CheckItem.module.scss';
import { useState } from 'react';

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
                        {
                            [styles.button_on]: select,
                            [styles.button_off]: !select,
                        }
                    )
                } 
                onClick={() => onClick(content)}
            >
                &nbsp;
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