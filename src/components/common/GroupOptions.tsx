import cn from 'classnames';
import styles from 'css/components/common/GroupOptions.module.scss';
import { CustomChangeEvent, GroupOption } from 'utils/interface';
import { SelectEventType } from 'utils/enum';

interface GroupOptionsProps<T> {
    options?: GroupOption<T>[];
    onChange?: (customChangeEvent: CustomChangeEvent) => (void);
}

export default function GroupOptions<T>(props: GroupOptionsProps<T>) {
    const { options } = props;

    const onClick = (item: T) => {
        if (props.onChange) {
            const customChangeEvent: CustomChangeEvent = {
                value: item,
                selectEventType: SelectEventType.그룹선택박스
            }

            props.onChange(customChangeEvent);
        }
    }

    return (
        <div className={cn(styles.container)}>
            {options && options.map((groupOption: GroupOption<T>, index: number) => (
                <ul className={cn(styles.group)} key={index}>
                    <li className={cn(styles.title)}>{groupOption.title}</li>
                    {groupOption.items && groupOption.items.map((item: T, index: number) => (
                        <li 
                            className={cn(styles.option)} 
                            key={index}
                            onClick={() => onClick(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}