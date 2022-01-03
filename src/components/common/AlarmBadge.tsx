import cn from 'classnames';
import styles from 'css/components/common/AlarmBadge.module.scss';

interface AlarmBadgeProps {
    name: string;
}

export default function AlarmBadge(props: AlarmBadgeProps) {
    const { name } = props;

    return (<span className={cn(styles.alarmBadge)}>{name}</span>)
}