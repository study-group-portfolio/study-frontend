import cn from 'classnames';
import styles from 'css/components/common/Switch.module.scss';
import { useState } from 'react';

interface SwitchProps {
    selected?: boolean;
    onChange?: (selected: boolean) => (void);
}

export default function Switch(props: SwitchProps) {
    const { selected } = props;

    const onChange = (selected: boolean) => {
        if (props.onChange) {
            props.onChange(selected);
        }
    }
    
    return (
        <div 
            className={cn(styles.container)}
            onClick={() => onChange(!selected)}
        >
            <span 
                className={
                    cn(
                        styles.switch,
                        {
                            [styles.selectedBtn]: selected
                        }
                    )
                }
            ></span>
            <span 
                className={
                    cn(
                        styles.background,
                        {
                            [styles.selectedBg]: selected,
                            [styles.noSelectedBg]: !selected
                        }
                    )
                }
            ></span>
        </div>
    )
}