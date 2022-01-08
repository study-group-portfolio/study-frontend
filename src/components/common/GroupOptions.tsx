import cn from 'classnames';
import styles from 'css/components/common/GroupOptions.module.scss';

interface GroupOption {
    title?: string;
    items?: string[];
}

interface GroupOptionsProps {
    options?: GroupOption[];
    onChange?: Function;
}

export default function GroupOptions(props: GroupOptionsProps) {
    const { options } = props;

    const onClick = (item: string) => {
        if (props.onChange) {
            props.onChange(item);
        }
    }

    return (
        <div className={cn(styles.container)}>
            {options && options.map((groupOption: GroupOption, index: number) => (
                <ul className={cn(styles.group)} key={index}>
                    <li className={cn(styles.title)}>{groupOption.title}</li>
                    {groupOption.items && groupOption.items.map((item: string, index: number) => (
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