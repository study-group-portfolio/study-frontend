import cn from 'classnames'
import styles from 'css/components/common/OvalCheckItem.module.scss';
import { useState } from 'react';

interface OvalCheckItemProps {
    name: string;
    onClick: Function;
}
export default function OvalCheckItem(props: OvalCheckItemProps) {
    const { name } = props;
    const [select, setSelect] = useState(false);
    const onClick = function(name: string) {
        setSelect(prev => {
            props.onClick(name, !prev);
            return !prev;
        })
    }

    return (
        <button
            className={
                cn(
                    styles.ovalCheckItem,
                    {
                        [styles.on]: select,
                        [styles.off]: !select
                    }
                )
            }
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}