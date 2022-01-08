import cn from 'classnames';
import styles from 'css/components/common/Options.module.scss';

interface OptionsProps {
    options?: string[];
    onChange?: Function;
}
export default function Options(props: OptionsProps) {
    const { options } = props;

    const onClick = (item: string) => {
        if (props.onChange) {
            props.onChange(item);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <ul>
            {options && options.map((item: string, index: number) => (
                <li 
                    className={cn(styles.option)}
                    key={index}
                    onClick={() => onClick(item)}
                >
                    {item}
                </li>
            ))}
            </ul>
        </div>
    )
}