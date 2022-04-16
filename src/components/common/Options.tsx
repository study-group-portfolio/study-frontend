import cn from 'classnames';
import styles from 'css/components/common/Options.module.scss';
import { CustomChangeEvent } from 'utils/interface';
import { SelectEventType } from 'utils/enum';

interface OptionsProps<T> {
    options?: T[];
    placeholder?: T;
    onChange?: (changeEvent: CustomChangeEvent) => (void);
}
export default function Options<T>(props: OptionsProps<T>) {
    const { options, placeholder } = props;

    const onClick = (item: T) => {
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
            {options && options.length > 0 && options.map((item: T, index: number) => (
                <li 
                    className={cn(styles.option)}
                    key={index}
                    onClick={() => onClick(item)}
                >
                    {item}
                </li>
            ))}
            {(!options || options.length === 0) && 
                <li
                    className={cn(styles.placeholder)}
                >
                    {placeholder}
                </li>
            }
            </ul>
        </div>
    )
}