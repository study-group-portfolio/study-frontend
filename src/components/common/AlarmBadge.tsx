import cn from 'classnames';
import styles from 'css/components/common/AlarmBadge.module.scss';

interface AlarmBadgeProps {
    text: string;
}

export default function AlarmBadge(props: AlarmBadgeProps) {
    const { text } = props;

    return (<span className={cn(styles.alarmBadge)}>{text}</span>)
}