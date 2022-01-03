import cn from 'classnames';
import { BadgeType } from 'utils/enum';
import styles from 'css/components/common/Badge.module.scss';

interface BadgeProps {
    badgeType: BadgeType;
}

export default function Badge(props: BadgeProps) {
    const { badgeType } = props;

    return (
        <span
            className={
                cn(
                    styles.badge,
                    {
                        [styles.recruiting]: badgeType === BadgeType.모집중,
                        [styles.recruited]: badgeType === BadgeType.모집완료,
                        [styles.etc]: badgeType !== BadgeType.모집중 && badgeType !== BadgeType.모집완료
                    }
                )
            }
        >
            {getBadgeName(badgeType)}
        </span>
    )
}

function getBadgeName(badgeType: BadgeType): string {
    switch (badgeType) {
        case BadgeType.모집완료:
            return '모집 완료';
        case BadgeType.모집중:
            return '모집중';
        case BadgeType.사이드프로젝트:
            return '사이드 프로젝트';
        case BadgeType.지식공뮤및탐구:
            return '지식 공유 및 탐구';
        case BadgeType.오프라인:
            return '오프라인';
        case BadgeType.온라인:
            return '온라인';
        case BadgeType.온오프라인:
            return '온/오프라인';
    }
}