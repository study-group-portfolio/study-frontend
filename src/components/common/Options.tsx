import cn from 'classnames';
import styles from 'css/components/common/Options.module.scss';
import { CustomChangeEvent } from 'utils/interface';
import { SelectEventType } from 'utils/enum';

interface OptionsProps {
    options?: string[];
    
    onChange?: (changeEvent: CustomChangeEvent) => (void);
}
export default function Options(props: OptionsProps) {
    const { options } = props;

    const onClick = (item: string) => {
        if (props.onChange) {
            const customChangeEvent: CustomChangeEvent = {
                value: item,
                selectEventType: SelectEventType.일반선택박스,
            }

            props.onChange(customChangeEvent);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <ul>
            {options && options.length > 0 && options.map((item: string, index: number) => (
                <li 
                    className={cn(styles.option)}
                    key={index}
                    onClick={() => onClick(item)}
                >
                    {item}
                </li>
            ))}
            {!options || options.length === 0 && <li></li>}
            </ul>
        </div>
    )
}