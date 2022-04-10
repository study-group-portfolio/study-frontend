import cn from 'classnames';
import styles from 'css/components/common/MemberCard.module.scss';
import ic_bookmark_off_24dp from 'images/icon/ic_bookmark_off_24dp.svg';
import ic_bookmark_on_24dp from 'images/icon/ic_bookmark_on_24dp.svg';
interface MemberCardProps {
    name: string;
    profileImg?: string;
    position: string;
    skillTags: string;
    bookMark: boolean;
    onClickBookMark: Function;
}

export default function MemberCard(props: MemberCardProps) {
    const {
        name,
        profileImg,
        position,
        skillTags,
        bookMark
    } = props;
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.content)}>
                <span 
                    className={
                        cn(
                            styles.circle_50,
                            {
                                [styles.text]: !profileImg
                            }
                        )
                    }
                >
                    {!profileImg && name.charAt(0)}
                    {profileImg && <img src={profileImg} alt="프로필이미지"/>}
                </span>
                <div className={cn(styles.detail)}>
                    <div className={cn(styles.top)}>
                        <span className={cn(styles.name)}>{name}</span>
                        <span className={cn(styles.position)}>{position}</span>
                    </div>
                    <div className={cn(styles.skillTags)}>{skillTags}</div>
                </div>
            </div>
            <div className={cn(styles.bookMarkSection)}>
                <button onClick={() => props.onClickBookMark()}>
                    {!bookMark && <img src={ic_bookmark_off_24dp} alt="북마크off"/>}
                    {bookMark && <img src={ic_bookmark_on_24dp} alt="북마크on"/>}
                </button>
            </div>
        </div>
    )
}