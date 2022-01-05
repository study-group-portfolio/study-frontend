import cn from 'classnames';
import styles from 'css/components/common/MemberCard.module.scss';

export default function MemberCard() {
    return (
        <div className={cn(styles.conatainer)}>
            <div className={cn(styles.info)}>
                <span className={cn(styles.circle_50)}>&nbsp;</span>
                <div className={cn(styles.detail)}>
                    <div className={cn(styles.basic)}>
                        <span className={cn(styles.name)}>이서윤</span>
                        <span className={cn(styles.position)}>UX/UI 디자이너</span>
                    </div>
                    <div className={cn(styles.skillTagList)}>#Adobe Photoshop #Adobe Illustrator #Fram…</div>
                </div>
            </div>
            <div className={cn(styles.bookMark)}>
                <button className={cn(styles.on)}>&nbsp;</button>
            </div>
        </div>
    )
}

function getImgStyle(img: string, position: string) {
    return {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: position
    }
}