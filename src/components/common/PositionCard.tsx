import cn from 'classnames';
import styles from 'css/components/common/PositionCard.module.scss';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';

interface SkillTag {
    name: string;
}

interface PositionCardProps {
    name: string;
    skillTagList: SkillTag[];
    recruitmentCount: number;
    currentCount: number;
    apply?: boolean;
}
export default function PositionCard(props: PositionCardProps) {
    const { name, skillTagList, recruitmentCount, currentCount, apply } = props;

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.content)}>
                <div className={cn(styles.section)}>
                    <span className={cn(styles.txt)}>{name}</span>
                    <span className={cn(styles.txt)}>{currentCount}/{recruitmentCount}</span>
                </div>
                <Button 
                    style={{padding: '9px 14px'}}
                    buttonName={apply || currentCount === recruitmentCount ? '모집마감' : '지원하기'}
                    disabled={apply || currentCount === recruitmentCount}
                    buttonType={ButtonType.서브}
                />
            </div>
            <div className={cn(styles.skillTags)}>
                {skillTagList.map((skillTag: SkillTag, index: number) => (<span className={cn(styles.tag)} key={index}>{skillTag.name}</span>))}
            </div>
        </div>
    )
}