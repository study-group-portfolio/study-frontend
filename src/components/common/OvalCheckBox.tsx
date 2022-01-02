import cn from 'classnames';
import styles from 'css/components/common/OvalCheckBox.module.scss';
import { useState } from 'react';
import OvalCheckItem from './OvalCheckItem';

interface OvalCheckBoxProps {
    list: string[];
    onClick: Function;
}

export default function OvalCheckBox(props: OvalCheckBoxProps) {
    const { list } = props;
    const [selectList, setSelectList] = useState(Array<string>());
    const onClick = (name: string, select: boolean) => {
        setSelectList(prev => {
            let selectList: string[] = [];
            if (select) {
                selectList = [...prev, name];
            } else {
                selectList = prev.filter(item => item !== name);
            }

            props.onClick(selectList);

            return selectList;
        })
    }

    return (
        <div className={cn(styles.container)}>
            {list && list.map((item, key) => 
                (
                    <OvalCheckItem 
                        name={item}
                        key={key}
                        onClick={(name: string, select: boolean) => onClick(name, select)}
                    />
                )
            )}
        </div>
    )
}