import cn from 'classnames';
import styles from 'css/components/common/Switch.module.scss';
import { useState } from 'react';

interface SwitchProps {
    onChange?: (selected: boolean) => (void);
}

export default function Switch(props: SwitchProps) {
    const [selected, setSelected] = useState(false);

    const onChange = (selected: boolean) => {
        if (props.onChange) {
            props.onChange(selected);
            setSelected(selected);
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