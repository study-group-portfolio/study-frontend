import cn from 'classnames';
import styles from 'css/components/common/Tabs.module.scss';
import { useState } from 'react';
import { Tab } from 'utils/interface';

interface TabsProps {
    tabList: Tab[],
    onChange?: (tab: Tab) => (void);
}

export default function Tabs(props: TabsProps) {
    const { tabList } = props;
    const [tabMenu, setTabMenu] = useState(tabList[0]);

    const onChange = (tab: Tab) => {
        setTabMenu(tab);

        if (props.onChange) {
            props.onChange(tab);
        }
    }

    return (
        <div className={cn(styles.container)}>
            {tabList.map((tab: Tab, key: number) => (
                <span
                    className={
                        cn(
                            styles.tab,
                            {
                                [styles.selected]: tabMenu.value === tab.value,
                                [styles.noSelected]: tabMenu.value !== tab.value 
                            }
                        )
                    }
                    onClick={() => onChange(tab)}
                    key={key}
                >
                    {tab.name}
                </span>
            ))}
        </div>
    )
}